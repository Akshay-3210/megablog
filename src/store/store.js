import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./authslice"

const store=configureStore({
    reducer:{
        authreducer,
        // post:postslice
    }
});

export default store;