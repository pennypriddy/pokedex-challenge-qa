import * as S from './styles'

import { Outlet, useLocation } from 'react-router-dom'

import React from 'react'
import audio from './audio'

function pressButton() {
  audio.buttonPress.play()
}

export default function Pokedex() {
  const location = useLocation()
  const [state, setState] = React.useState({
    isOn: location.pathname !== '/',
    isFullyOn: location.pathname !== '/',
    isFullyOff: location.pathname === '/',
  })

  function releaseButton() {
    audio.buttonRelease.play()
    if (state.isOn) {
      audio.shutdown(handleShutdownFinished).play()
      setState({ isOn: false, isFullyOn: true, isFullyOff: false })
    } else {
      audio.startup(handleStartupFinished).play()
      setState({ isOn: true, isFullyOn: false, isFullyOff: false })
    }
  }

  function handleShutdownFinished() {
    setState(currentState =>
      currentState.isOn
        ? currentState
        : { isOn: false, isFullyOn: false, isFullyOff: true }
    )
  }

  function handleStartupFinished() {
    setState(currentState =>
      currentState.isOn
        ? { isOn: true, isFullyOn: true, isFullyOff: false }
        : currentState
    )
  }

  return (
    <S.Container>
      {(!state.isFullyOn || !state.isOn) && (
        <S.Popup $isOn={state.isOn || state.isFullyOn}>
          <S.TextBox className="nes-container is-rounded">
            <h1>
              Click "On"
              <br />
              to start!
            </h1>
          </S.TextBox>
          <S.Arrow src="/arrow.png" />
        </S.Popup>
      )}
      <S.Shadow>
        <S.Frame>
          <S.Dots>
            <S.Dot>
              <S.Glare />
            </S.Dot>
            <S.Dot>
              <S.Glare />
            </S.Dot>
          </S.Dots>
          <S.RedButtonContainer>
            <S.RedButton onMouseDown={pressButton} onMouseUp={releaseButton} data-testid="on/off-button" />
            On/Off
          </S.RedButtonContainer>
          <S.Grill>
            <S.GrillLine />
            <S.GrillLine />
            <S.GrillLine />
            <S.GrillLine />
          </S.Grill>
          <S.Screen $isOn={state.isOn}>
            <S.ContentContainer $isOn={state.isOn}>
              <S.Content>
                <Outlet />
              </S.Content>
            </S.ContentContainer>
            <S.Glare />
          </S.Screen>
        </S.Frame>
      </S.Shadow>
    </S.Container>
  )
}
