import React from 'react';
import { ModalWrapper } from 'react-modal-opener';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/store/store';

function Root(): React.ReactElement {
    return (
        <Provider store={store}>
            <ModalWrapper/>
            <Outlet/>
        </Provider>
    );
}

export default Root;
