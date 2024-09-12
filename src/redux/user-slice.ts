import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"
import type { User } from "../types/user"
import { fetchUsers } from "../axios/axios"

interface State {
  value: User[]
  isLoading: boolean
  error: boolean
}

const initialState: State = {
  value: [],
  isLoading: true,
  error: false,
}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.isLoading = true
    })
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        state.value = action.payload
        state.isLoading = false
      },
    )
    builder.addCase(fetchUsers.rejected, state => {
      state.error = true
    })
  },
})
