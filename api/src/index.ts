import cors from 'cors'
import express from 'express'
import find from 'lodash/find'
import sortBy from 'lodash/sortBy'
import pokemonObj from './pokemon.json'

interface Pokemon {
  id: string
  num: string
  name: string
  img: string
  types: string[]
  weaknesses: string[]
  height: string
  weight: string
  egg: string
  prevEvolutions?: Array<{ num: string; name: string }>
  nextEvolutions?: Array<{ num: string; name: string }>
  candy?: string
  candyCount?: number
}

const pokemon: Record<string, Pokemon> = pokemonObj

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/', (_, res) => {
  res.send(sortBy(pokemon, poke => parseInt(poke.id, 10)))
})

app.get('/:id', ({ params: { id } }, res) => {
  if (id && id !== 'undefined') {
    res.send({
      ...pokemon[id],
      prevEvolutions: getEvolutions(pokemon[id].prevEvolutions),
      nextEvolutions: getEvolutions(pokemon[id].nextEvolutions),
    })
  } else res.sendStatus(400)
})

function getEvolutions(evolutionObjs?: Array<{ num: string; name: string }>) {
  return (
    evolutionObjs?.map(evolution =>
      find(pokemon, otherPokemon => otherPokemon.num === evolution.num)
    ) || []
  )
}

app.listen(3000, () => {
  console.info('API listening on port 3000')
})
