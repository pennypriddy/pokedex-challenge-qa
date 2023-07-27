import { useNavigate } from 'react-router-dom'
import audio from './audio'
import * as S from './styles'

function pressButton() {
  audio.clickPress.play()
}

export default function Home() {
  const navigate = useNavigate()

  function releaseButton() {
    audio.clickRelease.play()
    setTimeout(() => navigate('/pokemon'), 100)
  }

  return (
    <S.Container>
      <h1>Welcome to your Pokédex!</h1>
      <button
        className="nes-btn"
        onMouseDown={pressButton}
        onMouseUp={releaseButton}
      >
        Click to Start
      </button>
    </S.Container>
  )
}
