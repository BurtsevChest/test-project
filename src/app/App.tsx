import React from 'react';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import './styles.css'

function App(): React.ReactElement {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
