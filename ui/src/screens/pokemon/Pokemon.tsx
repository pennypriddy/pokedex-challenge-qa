import axios from 'axios'
import React from 'react'
import audio from './audio'
import * as S from './styles'

function clickLink() {
  audio.link.play()
}

export default function Pokemon() {
  const [state, setState] = React.useState<{
    isLoading: boolean
    hasError: boolean
    data: Array<{ id: string; name: string; img: string; num: string }>
  }>({
    isLoading: true,
    hasError: false,
    data: [],
  })
  const pokemonList = state.data

  React.useEffect(() => {
    axios
      .get('http://localhost:3000')
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
            data: [],
          })
          throw new Error('Failed to fetch')
        }
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  if (state.isLoading) {
    return <p>Loading...</p>
  }

  if (state.hasError || pokemonList.length === 0) {
    return <p>Error!</p>
  }

  return (
    <S.Container className="nes-container is-rounded">
      <S.List>
        {pokemonList.map(pokemon => (
          <S.PokemonLink
            key={pokemon.id}
            to={pokemon.id}
            onMouseDown={clickLink}
          >
            <S.ListItem>
              <S.PokemonImg src={pokemon.img} />
              <S.PokemonText>
                <span>{pokemon.name}</span>
                <span> - {pokemon.num}</span>
              </S.PokemonText>
            </S.ListItem>
          </S.PokemonLink>
        ))}
      </S.List>
    </S.Container>
  )
}
