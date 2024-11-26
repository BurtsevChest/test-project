import { default as MyTasksPageStore } from "@/modules/Tasks/pages/MyTasksPage/store/store";
import { loadTaskListAction } from "@/modules/Tasks/pages/MyTasksPage/store/slices/taskListSlice";
import { IFetchTasksFilter } from "@/modules/Tasks/interfaces";

// В данной реализации мы создаем стор для страницы Задач и импортируем сюда, таким образом стор создастся еще до загрузки страницы
// При загрузке страницы мы можем предзагрузить данные и вызвыть action чтобы положить эти данные в стор
// Получается, когда страница будет рендерится, данные для нее будут уже лежать в сторе

/**
 * Функция-загрузчик данных для страницы с задачами
 */
export default async function myTaskPageLoader({ params, request }): Promise<unknown> {
    // В предзагрузке очень легко и удобно будет загружать все необходимые данные, доступны searchParams и все необходимые данные
    const filter: IFetchTasksFilter = { Executor: 0 };
    // Можно сразу вернуть промис из лоадера по идее
    await MyTasksPageStore.dispatch(loadTaskListAction({ filter }));

    return null;
}
