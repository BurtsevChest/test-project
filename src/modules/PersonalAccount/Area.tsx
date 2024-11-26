import React from 'react';
import { Menu } from './components/Menu';
import './styles.css';
import { Outlet } from 'react-router-dom';

function Area(): React.ReactElement {
    return (
        <div className='PersonalAccount-Area'>
            <Menu />
            <div className="PersonalAccount-Content">
                <Outlet/>
            </div>
        </div>
    );
}

export default Area;
