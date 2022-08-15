import {createSlice} from "@reduxjs/toolkit";


const catalogInitialState = {
    products: []
}
const catalogSlice = createSlice({
    name: 'catalog',
    initialState: catalogInitialState,
    reducers: {
        getCatalog: (state, action) =>{
            state.products = action.payload
        },
        todoToggled(state, action) {
            const todo = state.find(todo => todo.id === action.payload)
            todo.completed = !todo.completed
        }
    }
})

export const { getCatalog } = catalogSlice.actions
export default catalogSlice.reducer