import React from 'react'
import DashboardLayout from '../../../components/DashboardLayout'
import { Layout, theme, Space, Table, Tag } from 'antd';


const { Content } = Layout;

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', },
  { title: 'Age', dataIndex: 'age', key: 'age', },
  { title: 'Address', dataIndex: 'address', key: 'address', },
  {
    title: 'Tags', key: 'tags', dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action', key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default function Offer() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DashboardLayout />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <div style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}>
            <div className='row heading m-3'>
              <h2 className='text-center'>Offers</h2>
            </div>
            <div className='text-end'>
              <button className='btn btn-warning me-3 mb-3 '>Add</button>
            </div>
            <div className='table-responsive'>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

