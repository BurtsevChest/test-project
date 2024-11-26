import React from 'react';
import { TaskList } from '@/modules/Tasks/components/TaskList/list';
import { useMyTaskList } from '@/modules/Tasks/pages/MyTasksPage/store/slices/taskListSlice';

/**
 * Компонент списка задач страницы "Мои задачи"
 * Этот компонент берет данные из слайса списка задач и работает только с ними
 * Сами данные в этом случае уже предзагружены в стор при переходе на страницу
 * @returns
 */
function List(): React.ReactElement {
    const taskList = useMyTaskList()

    return (
        <>
            таск лист куррент
            <TaskList
                items={taskList}
            />
        </>
    );
}

export default List;
