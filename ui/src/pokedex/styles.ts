import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  padding: 3rem;
`

export const Shadow = styled.div`
  border: 0.25rem solid #434c4e;
  border-radius: 4px;
  flex: 1;
  display: flex;
`

export const Frame = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  padding: 5rem;
  background-color: #cfcfcf;
  box-shadow: 0.5rem -0.5rem 1rem rgba(0, 0, 0, 0.25) inset,
    -0.5rem 0.5rem 1rem white inset;
`

export const RedButtonContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #434c4e;
  width: 9rem;
`

export const RedButton = styled.div`
  background-color: #e94847;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  transform: scale(1) translate(0, 0);
  box-shadow: -1px 2px 1px 1px rgba(0, 0, 0, 0.66);
  transition-property: transform, box-shadow;
  transition-duration: 300ms;
  cursor: url(https://unpkg.com/nes.css/assets/cursor-click.png), pointer;

  :active {
    transform: scale(0.95) translate(-1px, 1px);
    box-shadow: -1px 2px 0 0 rgba(0, 0, 0, 0.5);
  }
`

export const Grill = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 6rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const GrillLine = styled.div`
  width: 5rem;
  height: 0.3rem;
  background-color: #434c4e;
  border-radius: 33%;
`

export const Dots = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 4rem;
`

export const Dot = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  border: 2px solid #434c4e;
  border-radius: 50%;
  background-color: #666;

  :last-child {
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const Glare = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(
    60deg,
    rgba(0, 0, 0, 0.02) calc(50% - 1px),
    rgba(0, 0, 0, 0.02),
    rgba(255, 255, 255, 0.01) calc(50% + 1px)
  );
  width: 100%;
  height: 100%;
  z-index: 100;
  pointer-events: none;
`

export const Screen = styled.div<{ $isOn?: boolean }>`
  position: relative;
  border: 3px solid #434c4e;
  border-radius: 4px;
  flex: 1;
  display: flex;
  background-color: ${props =>
    props.$isOn ? 'rgb(122, 130, 119)' : '#434c4e'};
  transition-property: background-color;
  transition-duration: ${props => (props.$isOn ? '2s' : '1s')};
  transition-delay: ${props => (props.$isOn ? '1s' : '1s')};
`

interface IContentContainer {
  $isOn?: boolean
  children?: React.ReactNode
}

export const ContentContainer = styled.div<IContentContainer>`
  flex: 1;
  display: flex;
  opacity: ${props => (props.$isOn ? 1 : 0)};
  transition-property: opacity;
  transition-duration: ${props => (props.$isOn ? '2s' : '1s')};
  transition-delay: 1s;
  overflow-y: scroll;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Popup = styled.div<{ $isOn?: boolean }>`
  position: absolute;
  bottom: 7.5rem;
  left: 0.5rem;
  z-index: 100;
  opacity: ${props => (props.$isOn ? 0 : 1)};
  transition-property: opacity;
  transition-duration: 1s;
`

export const TextBox = styled.div`
  background-color: white;

  h1 {
    margin-bottom: 0;
  }
`

export const Arrow = styled.img`
  width: 10rem;
  margin-top: 2rem;
  margin-left: 4.65rem;
  transform: rotate(180deg);
`
