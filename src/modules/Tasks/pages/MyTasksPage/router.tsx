/**
 * Настройка роутинга для страницы "Задачи"
 */
import { RouteObject } from "react-router-dom";

// 1. Каждая страница (те, что находятся в аккордеоне, делает себе такие конфиги для роутинга)
// 2. Обязательно делая ленивую загрузку страници и даже лоадеров, дабы не тащить лишний код в главный бандл
// 3. Каждая страница вправе сама себе настроить предзагрузку, как она этого хочет

export default [
    {
        path: 'my-tasks',
        lazy: async () => {
            const { default: Page } = await import('@/modules/Tasks/pages/MyTasksPage/Page');
            return { Component: Page }
        },
        loader: async (...args) => {
            // Можно вызвать лоадер тут и тогда он будет вызываться всегда при перключении между детьми
            const { default: loader } = await import('./loader');
            return loader(...args);
        },
        children: [
            {
                path: 'current',
                lazy: async () => {
                    const { default: Component } = await import('@/modules/Tasks/pages/MyTasksPage/_taskList/List');
                    return { Component }
                },
            },
            {
                path: 'done',
                lazy: async () => {
                    const { default: Component } = await import('@/modules/Tasks/pages/MyTasksPage/_tasksDone/List');
                    return { Component }
                },
            }
        ]
    }
] as RouteObject[];
