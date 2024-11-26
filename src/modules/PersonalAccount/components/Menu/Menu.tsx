import React from 'react';
import { Menu as AntdMenu, MenuProps } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Задачи',
        icon: <MailOutlined />,
    },
    {
        key: 'sub2',
        label: 'CRM',
        icon: <AppstoreOutlined />,
    },
    {
        key: 'sub4',
        label: 'Настройки',
        icon: <SettingOutlined />,
    },
];

function Menu(): React.ReactElement {
    return (
        <AntdMenu 
            style={{ width: 256, height: '100%' }}
            defaultSelectedKeys={['sub1']}
            items={items}
        />
    );
}

export default Menu;
