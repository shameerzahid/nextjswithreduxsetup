// combination of actions and reducers
// action wh data hta hy jo store krna hta hy
// reducers k through data ko store krty hyn
const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    users: []
}

const Slice = createSlice({
    name: "addUserSlice",  //name is essential for each slice.
    initialState,
    reducers: {
        addUser: (state, action) => { //state means abhi kiya data hy or action means kia data dalny waly hyn
            // console.log(action);
            const data = {
                id: nanoid(),
                name: action.payload//payload have the value which is sent on clicking add
            }
            state.users.push(data);
        },
        removeUser: (state, action) => {
            // console.log(action);
            const data = state.users.filter((item) => { //fiter the data stored in state.users and returning the data which doesn.t match thr provided id
                return item.id !== action.payload;
        })
        state.users = data;
        }
    }
})

export const {addUser, removeUser} = Slice.actions;
export default Slice.reducer;
