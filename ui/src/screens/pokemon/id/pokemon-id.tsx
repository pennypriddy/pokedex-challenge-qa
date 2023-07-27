import axios from 'axios'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import audio from './audio'
import PokemonDetails from './pokemon-details'
import PokemonEvolutions from './pokemon-evolutions'
import * as S from './styles'

function clickLink() {
  audio.link.play()
}

export default function PokemonID() {
  const location = useLocation()
  const id = location.pathname.split('/').slice(-1)[0]
  const [state, setState] = React.useState<{
    isLoading: boolean
    hasError: boolean
    data: {
      id: string
      name: string
      num: string
      img: string
      height: string
      weight: string
      egg: string
      types: string[]
      weaknesses: string[]
      prevEvolutions: Array<{ id: string; name: string; img: string }>
      nextEvolutions: Array<{ id: string; name: string; img: string }>
    } | null
  }>({
    isLoading: true,
    hasError: false,
    data: null,
  })
  const pokemon = state.data

  React.useEffect(() => {
    setState({
      isLoading: true,
      hasError: false,
      data: null,
    })
    axios
      .get(`http://localhost:3000/${id}`)
      .then(result => {
        if (result.data) {
          setState({
            isLoading: false,
            hasError: false,
            data: result.data,
          })
        } else {
          setState({
            isLoading: false,
            hasError: true,
            data: null,
          })
          throw new Error('Failed to fetch')
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  if (state.isLoading) {
    return <p>Loading...</p>
  }

  if (state.hasError || !pokemon) {
    return <p>Error!</p>
  }

  return (
    <>
      <Link
        onMouseDown={clickLink}
        to="/pokemon"
        style={{
          marginLeft: '1rem',
          marginTop: '1rem',
        }}
      >
        <button className="nes-btn">{'< Back to List'}</button>
      </Link>
      <S.Container className="nes-container is-rounded">
        <PokemonDetails pokemon={pokemon} />
        <PokemonEvolutions pokemon={pokemon} />
      </S.Container>
    </>
  )
}
