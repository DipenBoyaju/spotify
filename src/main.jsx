import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PlayerContextProvider from './context/PlayerContext.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PlayerContextProvider>
        <App />
      </PlayerContextProvider>
    </Provider>
  </React.StrictMode>,
)
