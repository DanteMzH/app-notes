import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppNotes } from './Pages/AppNotes'
import { Provider } from 'react-redux'
import store from './store/Store'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <AppNotes/>
  </Provider>
  )
