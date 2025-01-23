import React, { useState } from 'react';
import { Button, Input, Form, Row, Col, DatePicker } from 'antd';

const uniqueId = () => Math.random().toString(36).slice(4);
const initialState = { title: '', description: '', location: '', date: '' };

export default function AddTodo() {
    const [state, setState] = useState(initialState);
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = (e) => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleAddTodo = (e) => {
        e.preventDefault();
        // setIsProcessing(true)
        const { title, description, location, date } = state;

        if (title === '' || description === '' || location === '' || date === '') { return window.toastify("All fields are must reguired",'warning') }

        let todo = {
            title,
            description,
            location,
            date,
            createdAt: new Date(),
            status: "InComplete",
            // userId: currentUser.id,
            todoId: uniqueId()
        }
        console.log(todo)
        window.toastify("Added Successfully",'success');
        setState(initialState);
        setIsProcessing(false)
    }
    return (
        <main>
            <div className='container-xl add-todo-container'>
                <div className="card add-todo-card p-3 p-md-4 w-100 border-0" >
                    <h2 className='text-center mb-4 card-heading'>Add Todo</h2>
                    <Form layout='vertical'>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Input size='large' className='add-todo-input' placeholder="Title" name='title' value={state.title} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input size='large' className='add-todo-input' placeholder="Description" name='description' value={state.description} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input size='large' className='add-todo-input' placeholder="Location" name='location' value={state.location} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <DatePicker  size='large' className='add-todo-datepicker' placeholder="Date" name='date' value={state.date} onChange={handleChange}/>
                            </Col>
                            <Col span={24}>
                                <Button className='btn btn-primary add-todo-btn' size='large' block loading={isProcessing} onClick={handleAddTodo}>Add</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </main>
    )
}
