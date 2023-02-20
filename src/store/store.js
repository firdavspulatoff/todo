import {configureStore} from '@reduxjs/toolkit'
import eployersSlice from '../slices/eployersSlice'
import searchSlice from '../slices/searchSlice'

export default configureStore({
    reducer:{
        eployersSlice,
        searchSlice,
    }
})