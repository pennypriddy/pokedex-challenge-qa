import { Link, useLocation } from 'react-router-dom'

import audio from './audio'
import PokemonDetails from './pokemon-details'
import PokemonEvolutions from './pokemon-evolutions'
import * as S from './styles'
import { trpc } from '../../../utils/trpc'

function clickLink() {
  audio.link.play()
}

export default function PokemonID() {
  const location = useLocation()
  const id = location.pathname.split('/').slice(-1)[0]
  const pokemon = trpc.pokemonDetails.useQuery({ id })

  if (pokemon.isLoading) {
    return <p>Loading...</p>
  }

  if (pokemon.isError || !pokemon?.data) {
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
        <PokemonDetails pokemon={pokemon?.data} />
        <PokemonEvolutions pokemon={pokemon?.data} />
      </S.Container>
    </>
  )
}
