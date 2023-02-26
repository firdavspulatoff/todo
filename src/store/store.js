import {configureStore} from '@reduxjs/toolkit'
import eployersSlice from '../slices/eployersSlice'

export default configureStore({
    reducer:{
        eployersSlice,
    }
})