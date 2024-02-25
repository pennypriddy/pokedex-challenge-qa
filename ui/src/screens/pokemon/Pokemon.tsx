import audio from './audio'
import * as S from './styles'

import { trpc } from '../../utils/trpc'

function clickLink() {
  audio.link.play()
}

export default function Pokemon() {
  const pokemon = trpc.pokemonList.useQuery()

  if (pokemon.isLoading) {
    return <p>Loading...</p>
  }

  if (pokemon.isError || !pokemon?.data) {
    return <p>Error!</p>
  }

  return (
    <S.Container className="nes-container is-rounded">
      <S.List>
        {pokemon?.data?.map(pokemon => (
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
