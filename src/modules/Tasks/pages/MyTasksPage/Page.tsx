import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { Outlet } from 'react-router-dom';

/**
 * Основная область страницы "Задачи"
 * @returns 
 */
function MyTasksPage(): React.ReactElement {
    return (
        // Данные в этот стор уже предзагрузились в лоадере
        <Provider store={store}>
            <Outlet/>
        </Provider>
    );
}

export default MyTasksPage;
