import { createSlice } from "@reduxjs/toolkit";

export interface IRegionSliceState {
    regId: number;
    regName?: string;
}

const REGION_NAMES = {
    'Москва': [77, 99, 97, 177, 199, 197, 777]
}

const getRegionName = (regId: number) => {
    return Object.entries(REGION_NAMES).find(([_, regIds]) => {
        return regIds.includes(regId);
    })?.[0];
}

const initialState = {} as IRegionSliceState;

export const regionSLice = createSlice({
    name: 'regionSLice',
    initialState,
    reducers: {
        setRegion: (state, { payload }) => {
            state.regId = payload;
            state.regName = getRegionName(payload);
        }
    }
});

export const { setRegion: setRegionAction } = regionSLice.actions;

export default regionSLice.reducer;
