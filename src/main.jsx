import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Game from './Game/GameContainer.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <Game />
    </Provider>
  </StrictMode>,
)
