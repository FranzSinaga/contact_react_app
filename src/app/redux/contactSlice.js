import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "counter",
  initialState: {
    contactList: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.contactList = action.payload;
    },
  },
});
export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
