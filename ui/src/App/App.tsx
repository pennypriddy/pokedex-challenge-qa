import 'minireset.css'
import 'nes.css/css/nes.min.css'
import './app.css'

import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/react-query'

import Pokedex from '../pokedex'
import Home from '../screens/home'
import Pokemon from '../screens/pokemon'
import PokemonID from '../screens/pokemon/id'
import { trpc } from '../utils/trpc'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Pokedex />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/pokemon',
        element: <Pokemon />,
      },
      {
        path: '/pokemon/:id',
        element: <PokemonID />,
      },
    ],
  },
])

export default function App() {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() => 
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000',
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </trpc.Provider>
  )
}
