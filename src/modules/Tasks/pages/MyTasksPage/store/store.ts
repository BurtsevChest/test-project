import { configureStore } from "@reduxjs/toolkit";
import taskListReducer from "./slices/taskListSlice";

/**
 * Стор страницы "Мои задачи"
 */
const store = configureStore({
    reducer: {
        taskList: taskListReducer
    }
});

export default store;