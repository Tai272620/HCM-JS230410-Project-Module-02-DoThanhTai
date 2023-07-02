import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getUserById = createAsyncThunk(
    "getUserById",
    async (userName)
)