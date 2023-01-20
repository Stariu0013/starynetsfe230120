import { createSlice } from '@reduxjs/toolkit'
import {IUser} from "../types/types";

interface InitialState {
    users: IUser[],
    isLoading: boolean,
}

const initialState: InitialState = {
    users: [],
    isLoading: false,
}

export const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFirstThreeUsers: (state, action) => {
            state.isLoading = true;
            state.users = action.payload.filter((user: IUser) => user.id <= 3);
            state.isLoading = false;
        },
        setAllUsers: (state, action) => {
            state.isLoading = true;
            state.users = action.payload;
            state.isLoading = false;
        },
    },
});

export const { setFirstThreeUsers, setAllUsers } = usersReducer.actions;

export default usersReducer.reducer;
