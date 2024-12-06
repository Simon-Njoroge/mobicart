import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  id:null,
  email: null,
  firstName: null,
  lastName: null,
  phone: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id=action.payload.id,
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phone = action.payload.phone;
      state.isAuthenticated = true;

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.id=null,
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.phone = null;
      state.isAuthenticated = false;

      // Clear user data from localStorage
      localStorage.removeItem('user');
    },
    setUserFromLocalStorage: (state) => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          state.id=parsedUser.id;
          state.email = parsedUser.email;
          state.firstName = parsedUser.firstName;
          state.lastName = parsedUser.lastName;
          state.phone = parsedUser.phone;
          state.isAuthenticated = true;
        }
      } catch (error) {
        console.error("Error loading user data from localStorage:", error);
        // You can handle errors by either resetting state or logging the error.
      }
    }
  },
});

export const { setUser, clearUser, setUserFromLocalStorage } = userSlice.actions;

export default userSlice.reducer;
