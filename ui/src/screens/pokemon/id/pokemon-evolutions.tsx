import * as S from '../styles'

import audio from './audio'

function clickLink() {
  audio.link.play()
}

export default function PokemonEvolutions({
  pokemon,
}: {
  pokemon: {
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
  }
}) {
  return (
    <>
    <div id="previousEvolutions">
      {pokemon.prevEvolutions.length > 0 && (
        <h2 style={{ marginTop: '2rem' }}>Previous Evolutions</h2>
      )}
      {pokemon.prevEvolutions.map(prevEvolution => (
        <S.PokemonLink
          onMouseDown={clickLink}
          style={{
            width: 'unset',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '1rem',
          }}
          to={`/pokemon/${prevEvolution.id}`}
        >
          <img src={prevEvolution.img} />
          <h2>{prevEvolution.name}</h2>
        </S.PokemonLink>
      ))}
      </div>
      <div id="nextEvolutions">
        {pokemon.nextEvolutions.length > 0 && (
          <h2 style={{ marginTop: '2rem' }}>Next Evolutions</h2>
        )}
        {pokemon.nextEvolutions.map(nextEvolution => (
          <S.PokemonLink
            onMouseDown={clickLink}
            style={{
              width: 'unset',
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginRight: '1rem',
            }}
            to={`/pokemon/${nextEvolution.id}`}
          >
            <img src={nextEvolution.img} />
            <h2>{nextEvolution.name}</h2>
          </S.PokemonLink>
        ))}
       </div>
    </>
  )
}
