"use client"

import { store } from "./store";

const { Provider } = require("react-redux");

//next or redux ko connect kryga
export function Providers({children}){
    return <Provider store={store}>
        {children} 
    </Provider>
}