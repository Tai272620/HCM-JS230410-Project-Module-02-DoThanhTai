import { configureStore } from "@reduxjs/toolkit";

import counterReducer from './slices/counter.slice'
import productReducer from "./slices/product.slice";

const store = configureStore(
    {
        reducer: {
            productStore: productReducer
        }
    }
)

export default store