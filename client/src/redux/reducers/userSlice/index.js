import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    token: ''
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeToken: (state, actions) => {
      //console.log(actions)
        state.token = actions.payload.token

             },


 }
});

export const { changeToken } = userSlice.actions;
export default userSlice.reducer;
