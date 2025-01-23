import React, { useState } from 'react'
import { TagsOutlined, UnorderedListOutlined, TeamOutlined, FileTextOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export default function DashboardLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()

    const getItem = (label, key, icon, onClick) => {
        return {
            key,
            icon,
            label,
            onClick,
        };
    }
    const items = [
        getItem('Users', '1', <TeamOutlined />, () => navigate('/dashboard/')),
        getItem('Destinations', '2', <UnorderedListOutlined />, () => navigate("/dashboard/destination")),
        getItem('Offers', '3', <TagsOutlined />, () => navigate("/dashboard/offer")),
        getItem('Blogs', '4', <FileTextOutlined />, () => navigate("/dashboard/blog")),
    ];
    return (
        <>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
        </>
    )
}
