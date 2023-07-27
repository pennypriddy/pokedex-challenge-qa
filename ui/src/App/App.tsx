import 'minireset.css'
import 'nes.css/css/nes.min.css'
import './app.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pokedex from '../pokedex'
import Home from '../screens/home'
import Pokemon from '../screens/pokemon'
import PokemonID from '../screens/pokemon/id'

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
  return <RouterProvider router={router} />
}
