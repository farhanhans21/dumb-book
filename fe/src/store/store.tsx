import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import AuthReducer from "../auth/hooks/slice"
import ProfilReducer from "../components/userComponents/Profile/hooks/slice"
export const  store = configureStore({
  reducer:{
    auth: AuthReducer,
    profile: ProfilReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // execute action dari redux
export const useAppSelector = useSelector.withTypes<RootState>() // mengambil data redux
