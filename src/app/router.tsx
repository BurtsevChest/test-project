import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

/**
 * Дополнительные роуты приложения
 */
import { default as myTaskPageRouter } from "@/modules/Tasks/pages/MyTasksPage/router";

/**
 * Основной роутер приложения
 */
export default createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            // просто так сделал отдельной страницей
            {
                path: 'auth',
                lazy: async () => {
                    const { default: Page } = await import('@/modules/Authorization/pages/AuthPage/Page');
                    return { Component: Page };
                },
                loader: async (params) => {
                    const { default: loader } = await import('@/modules/Authorization/pages/AuthPage/loader');
                    return loader(params);
                }
            },
            // личный кабинет пользователя с менюшкой слева
            {
                path: 'account/',
                lazy: async () => {
                    const { default: Component } = await import('@/modules/PersonalAccount/Area');
                    return { Component };
                },
                children: [
                    // роутеры личного кабинета
                    ...myTaskPageRouter
                ]
            },
        ]
    },
]);
