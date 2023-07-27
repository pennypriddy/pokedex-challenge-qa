export default function PokemonDetails({
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
      <h1>
        {pokemon.name} - {pokemon.num}
      </h1>
      <img style={{ marginBottom: '2rem' }} src={pokemon.img} />
      <table
        className="nes-table is-centered"
        style={{ background: 'transparent' }}
      >
        <tr>
          <th>Types</th>
          <th>Weaknesses</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Egg</th>
        </tr>
        <tr>
          <td>{pokemon.types.join(', ')}</td>
          <td>{pokemon.weaknesses.join(', ')}</td>
          <td>{pokemon.height}</td>
          <td>{pokemon.weight}</td>
          <td>{pokemon.egg}</td>
        </tr>
      </table>
    </>
  )
}
