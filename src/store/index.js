// 여러 슬라이스 만들기
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

export default store;
