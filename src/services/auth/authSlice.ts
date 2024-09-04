import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { users } from "./mockData"; // Ensure mockData is imported correctly

interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  roles: string[];
}

// const initialState: AuthState = {
//   isAuthenticated: false,
//   accessToken: null,
//   refreshToken: null,
//   roles: [],
// };

const initialState: AuthState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
  roles: JSON.parse(localStorage.getItem("roles") || "[]"),
};

export const login = createAsyncThunk(
  "auth/login",
  async (
    credentials: { username: string; password: string },
    { rejectWithValue }
  ) => {
    const user = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );  

    if (user) {
      localStorage.setItem("accessToken", "mockAccessToken");
      localStorage.setItem("refreshToken", "mockRefreshToken");
      localStorage.setItem("roles", JSON.stringify(user.roles));
      return {
        accessToken: "mockAccessToken",
        refreshToken: "mockRefreshToken",
        roles: user.roles,
      };
    } else {
      return rejectWithValue("Invalid username or password");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("roles");
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.roles = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      login.fulfilled,
      (
        state,
        action: PayloadAction<{
          accessToken: string;
          refreshToken: string;
          roles: string[];
        }>
      ) => {        
        state.isAuthenticated = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.roles = action.payload.roles;
      }
    );
    builder.addCase(login.rejected, (state, action) => {     
      state.isAuthenticated = false;
      state.accessToken = null;
      state.refreshToken = null;
      state.roles = [];
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
