import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk("user/signupUser", async (values, thunkAPI) => {
    try {
        const {data} = await axios.post("/api/auth/register", values)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const signInUser = createAsyncThunk("user/signinUser", async (values, thunkAPI) => {
    try {
        const {data} = await axios.post("/api/auth/login", values)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const initialState = {
    user: {},
    token: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
}

export const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state, action) => {
            state.user = {}
            state.isSuccess = false
            state.token = ""
        }
    },
    extraReducers:  {
      [signupUser.fulfilled]: ( state, action ) => {
            state.user = action.payload.user
            state.token = action.payload.accessToken
            state.isFetching = false;
            state.isSuccess = true;
        },
        [signupUser.pending]: ( state ) => {
          state.isFetching = true;
        },
        [signupUser.rejected]: ( state, {payload} ) => {
          state.isFetching = false;
          state.isError = true;
          state.errorMessage = payload.message;
        } ,
        [signInUser.fulfilled]: ( state, action ) => {
            state.user = action.payload.user
            state.token = action.payload.accessToken
            state.isFetching = false;
            state.isSuccess = true;
        },
        [signInUser.pending]: ( state ) => {
          state.isFetching = true;
        },
        [signInUser.rejected]: ( state, {payload} ) => {
          state.isFetching = false;
          state.isError = true;
          state.errorMessage = payload.message;
        }
 }
})

export const { logout } = userSlice.actions
export default userSlice.reducer
