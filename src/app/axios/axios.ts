import axios from "axios";
import type { User } from "../../types/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const getUsers = createAsyncThunk('getUsers', async () => {
 const users = await api.get(`users`);
 return (await users.data) as User[];
});
