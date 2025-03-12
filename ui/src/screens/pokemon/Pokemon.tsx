import * as S from './styles'

import audio from './audio'
import { trpc } from '../../utils/trpc'
import { useState } from 'react'

function clickLink() {
  audio.link.play()
}

export default function Pokemon() {
  const pokemon = trpc.pokemonList.useQuery()
  const [filterText, setFilterText] = useState('')
  const [filterType, setFilterType] = useState('Grass')
  const [filterWeakness, setFilterWeakness] = useState('')
  const typeArray = [
    '',
    ...new Set(pokemon?.data?.map(p => [...p.types]).flat(1)),
  ]

  const options = typeArray.map(type => {
    return (
      <option key={type} value={type}>
        {type}
      </option>
    )
  })

  const typeDropdown = (
    <select onChange={e => setFilterType(e.target.value)}>{options}</select>
  )

  const weaknessDropdown = (
    <select onChange={e => setFilterWeakness(e.target.value)}>{options}</select>
  )

  if (pokemon.isLoading) {
    return <p>Loading...</p>
  }

  if (pokemon.isError || !pokemon?.data) {
    return <p>Error!</p>
  }

  return (
    <S.Container className="nes-container is-rounded">
      <p>
        Filter:{' '}
        <input
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />
      </p>
      <p>Type: {typeDropdown}</p>
      <p>Weakness: {weaknessDropdown}</p>
      <S.List>
        {pokemon?.data
          ?.filter(
            pokemon =>
              (pokemon.name.toLowerCase().includes(filterText.toLowerCase()) ||
                pokemon.id.includes(filterText)) &&
              (filterType === '' || pokemon.types.includes(filterType)) &&
              (filterWeakness === '' ||
                pokemon.weaknesses.includes(filterWeakness))
          )
          .map(pokemon => (
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
