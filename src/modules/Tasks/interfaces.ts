/**
 * Интерфейсы модуля "Задачи"
 */

export interface IFetchTasksFilter {
    /**
     * Идентификатор исполнителя задачи
     */
    Executor?: number | null;
}

export interface IFetchTasksParams {
    filter: IFetchTasksFilter;
    searchString?: string;
}

export interface ITask {
    Id: number;
    Executor: {
        Id: number;
        Name: string;
        Surname: string;
    };
    Title: string;
    Description: string;
    DateStart: string;
    Deadline: string;
}
