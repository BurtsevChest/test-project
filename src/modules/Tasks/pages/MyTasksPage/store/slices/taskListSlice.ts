import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IFetchTasksParams, ITask } from '@/modules/Tasks/interfaces';
import { fetchTaskList } from '@/modules/Tasks/api';
import { useSelector } from 'react-redux';

const initialState = [] satisfies ITask[] as ITask[];

// Просто тестовый слайс для показа, в идеале можно сделать слайс папкой и закинуть в отдельные файлы селекторы, редуктор, акшионы и т.п.

export const taskListSlice = createSlice({
    name: 'taskList',
    initialState,
    reducers: {
        setTaskList: (state, { payload }: { payload: ITask[] }) => {
            state.length = 0;
            state.push(...payload);
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadTaskListAction.fulfilled, (state, { payload }: { payload: ITask[] }) => {
            // недавно работаю с редаксом, так что хз как сделать так чтобы весь стейт переопределить
            state.length = 0;
            state.push(...payload);
        })
    }
});

export const {
    setTaskList
} = taskListSlice.actions;

export default taskListSlice.reducer;

export const loadTaskListAction = createAsyncThunk('taskList/loadTaskList', async (filter: IFetchTasksParams) => {
    const tasks = await fetchTaskList(filter);
    return tasks;
});

export const useMyTaskList = () => {
    return useSelector((state: { taskList: ITask[] }) => state.taskList);
}