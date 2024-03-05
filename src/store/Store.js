import { configureStore } from '@reduxjs/toolkit'
import { firstSlice } from '../slice/FirstSlice'

const store = configureStore({
  reducer: firstSlice.reducer,
})

export default store