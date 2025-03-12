import { publicProcedure, router } from './trpc'

import { TRPCError } from '@trpc/server';
import cors from 'cors'
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import find from 'lodash/find'
import pokemonObj from './pokemon.json'
import sortBy from 'lodash/sortBy'
import { z } from 'zod'

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

const appRouter = router({
  pokemonList: publicProcedure
    .query(() =>
      sortBy(pokemon, poke => parseInt(poke.id, 10))
    ),
  pokemonDetails: publicProcedure
    .input(z.object({ id: z.string() }))
    .query((opts) => {
      const { input: { id } } = opts

      if (id && id !== 'undefined') {
        return {
          ...pokemon[id],
          prevEvolutions: getEvolutions(pokemon[id].prevEvolutions),
          nextEvolutions: getEvolutions(pokemon[id].nextEvolutions)
        }
      } else {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Missing Pokemon ID'
        })
      }
    })
})

function getEvolutions(evolutionObjs?: Array<{ num: string; name: string }>) {
  return (
    evolutionObjs?.map(evolution =>
      find(pokemon, otherPokemon => otherPokemon.num === evolution.num)
    ) || []
  )
}

export type AppRouter = typeof appRouter

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
})

server.listen(3000, () => console.info('tRPC listening on port 3000'))
