import { configureStore } from "@reduxjs/toolkit";
import regionSlice from "./slices/regionSlice";

// Глобальный стор для всего приложения, тут может храниться информация, необходимая для работы всего приложения, 
// вне зависимости от того, какая страница открыта
// Тут могут быть данные пользователя, цветовая тема приложения, текущие регион ползователя и т.п. 
const store = configureStore({
    reducer: {
        regionSlice
    }
});

export default store;
