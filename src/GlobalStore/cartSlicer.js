import {createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        count : 0,
    },
    reducers:{
        addItems : (state, action) =>{
            state.items.push({...action.payload, quantity:1})
            state.count++;
        },
        incrementItems : (state, action) =>{
            const food = state.items.find(item => item.id === action.payload.id)
            food.quantity += 1;
            state.count++;
        },
        decrementItems : (state, action) =>{
            const food = state.items.find(item => item.id === action.payload.id)
            if(food.quantity > 1)
                food.quantity -= 1;
            else
                state.items = state.items.filter(item => item.id != action.payload.id)
            state.count--;
        }


    }
})

export const {addItems, incrementItems, decrementItems} = cartSlice.actions;
export default cartSlice.reducer;