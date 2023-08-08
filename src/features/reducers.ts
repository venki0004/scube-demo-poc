import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import employeeSlice from "./employeeSlice";
import manageDeviceSlice from "./manageDeviceSlice";



export default combineReducers({
    auth: authReducer,
    employee:employeeSlice,
    device:manageDeviceSlice
});
