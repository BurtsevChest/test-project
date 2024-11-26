/**
 * API сервиса задач
 */

import { IFetchTasksParams, ITask } from '@/modules/Tasks/interfaces';
/**
 * Основной списочный метод Задач
 */
export const fetchTaskList = async (params: IFetchTasksParams): Promise<ITask[]> => {
    const tasks = (await import('./mock/taskList.json')).default;

    return tasks.filter(task => {
        return (task.Executor.Id === params.filter.Executor) &&
        (
            !params.searchString ||
            (
                task.Description.toLowerCase().includes(params.searchString.toLowerCase()) ||
                task.Title.toLowerCase().includes(params.searchString.toLowerCase())
            )
        );
    });
}
