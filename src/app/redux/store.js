const { configureStore } = require("@reduxjs/toolkit");
import reducer from './slice'
// redux ka data flow uni directional he hota hy ui -> action -> reducers -> store -> ui 
// wo data jo application s bhjty hyn k isk pas aye or yahan s us jaga bhjy js component mn zrurt hy
export const store = configureStore({
    reducer: reducer
})