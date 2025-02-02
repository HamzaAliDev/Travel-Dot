import React, { useCallback, useEffect, useState } from 'react';
import DashboardLayout from '../../../components/DashboardLayout';
import { Layout, theme, Space, Table, Tag, Modal, Form, Select } from 'antd';
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from 'firebase/firestore';
import { firestore } from '../../../config/firebase';
import moment from 'moment';

const { Content } = Layout;
const { Option } = Select;

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [status, setStatus] = useState('');

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const readData = useCallback(async () => {
    // Create a query that orders data in ascending order by createdAt
    const q = query(collection(firestore, 'bookings'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    let bookingList = [];
    querySnapshot.forEach((doc) => {
      bookingList.push({ id: doc.id, ...doc.data() }); // Include the document ID
    });
    setBookings(bookingList);
  }, []);

  useEffect(() => {
    readData();
  }, [readData]);

  // console.log('bookings', bookings);

  const columns = [
    { title: 'St#', dataIndex: 'num', key: 'num', },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Destination', dataIndex: 'destination', key: 'destination' },
    { title: 'Travelers', dataIndex: 'travelers', key: 'travelers' },
    { title: 'Price', dataIndex: 'price', key: 'price' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Request', dataIndex: 'specialRequest', key: 'specialRequest' },
    { title: 'Created At', dataIndex: 'createdAt', key: 'createdAt' },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let color = 'geekblue'; // Default color
        if (status === 'rejected') {
          color = 'volcano';
        } else if (status === 'completed') {
          color = 'green';
        } else if (status === 'pending') {
          color = 'yellow';
        }
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <button className="btn btn-sm btn-outline-warning" onClick={() => handleUpdate(record)}>
            Update
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(record.id)}>
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const data = bookings.map((book, i) => {
    return {
      key: i + 1,
      num: i + 1,
      id: book.id,
      name: book.name,
      email: book.email,
      destination: book.destination,
      travelers: book.travelers,
      price: book.totalPrice,
      date: book.date,
      specialRequest: book.specialRequests,
      createdAt: book.createdAt ? moment(book.createdAt.seconds * 1000).format('YYYY-MM-DD h:mm:ss a') : 'N/A',
      status: book.status || 'N/A', // Use the status field from Firestore
    };
  });

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestore, "bookings", id));
      // Update state by removing the deleted user
      setBookings(bookings.filter(book => book.id !== id));
      window.toastify('Booking deleted successfully', 'success');
    } catch (error) {
      console.error("Error deleting booking: ", error);
      window.toastify('Failed to delete Booking', 'error');
    }
  };

  const handleUpdate = (record) => {
    setSelectedBooking(record);
    setOpen(true);
  };

  // Handle modal close
  const handleCancel = () => {
    setOpen(false);
  };

  // Handle status  change
  const handleStatusChange = (value) => {
    setStatus(value);
  };

  // Handle form submit

  const handleFormSubmit = async () => {
    setConfirmLoading(true);
    try {
      const docRef = doc(firestore, "bookings", selectedBooking.id);
      await updateDoc(docRef, {
        status: status
      });
      setBookings(bookings.map(book => book.id === selectedBooking.id ? { ...book, status: status } : book))
      window.toastify("Booking Updated Successfully!", 'success')
      setOpen(false);
    } catch (error) {
      console.error("Error updating user role: ", error);
      window.toastify('Failed to update user role', 'error');
    } finally {
      setConfirmLoading(false);
    }

  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DashboardLayout />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div className="row heading m-3">
              <h2 className="text-center">Bookings</h2>
            </div>
            <div className="table-responsive">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </Content>
        <Modal
          title="Title"
          open={open}
          onOk={handleFormSubmit}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <Form onFinish={handleFormSubmit} layout="vertical">
            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true, message: 'Please select a statue' }]}
            >
              <Select placeholder="Booking status" value={status} onChange={handleStatusChange}>
                <Option value="completed">Completed</Option>
                <Option value="pending">Pending</Option>
                <Option value="ongoing">On Going</Option>
                <Option value="rejected">Rejected</Option>
              </Select>
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    </Layout>
  );
}