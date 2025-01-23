import React, { useState } from 'react';
import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Input, Form, Row, Col } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '../../config/firebase';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';



const initialState = { fullName: '', email: '', password: '', confirmPassword: '' }
export default function Register() {
    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)
    const navigate = useNavigate();

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleRegister = (e) => {
        e.preventDefault();
        let { fullName, email, password, confirmPassword } = state
        fullName = fullName.trim();
        email = email.trim();

        if (fullName === '' || email === '' || password === '' || confirmPassword === '') { return window.toastify("All fields are must required", 'error') }
        if (fullName.length < 3) { return window.toastify("Enter your Full Name", 'error') }
        if (!window.isEmail(email)) { return window.toastify("Enter a valid email address", 'error') }
        if (password.length < 6) { return window.toastify("Password must contain 6 chars", 'error') }
        if (confirmPassword !== password) { return window.toastify("Password doesn't match", "error") }


        const addData = async (user) => {
            try {
                await setDoc(doc(firestore, "users", user.uid), {
                    fullName,
                    email,
                    id: user.uid,
                    createdAt: serverTimestamp(),
                    roles: ["user"]
                });
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        }

        setIsProcessing(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                window.toastify("Successfully registered a new user", "success")
                addData(user)
                setState(initialState);
                setIsProcessing(false);
                navigate('/')
            })
            .catch((error) => {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        window.toastify("Email address already is used", 'error'); break;
                    default:
                        window.toastify("Something went wrong  while creating new user", 'error');
                }
                setIsProcessing(false);
            });

    }

    return (
        <main>
            <div className='container-xl auth-container'>
                <div className="card auth-card p-3 p-md-4 w-100 border-0" >
                    <h2 className='text-center my-4 card-heading'>Register</h2>
                    <Form layout='vertical'>
                        <Row gutter={[16, 16]}>
                            <Col span={24}>
                                <Input size='large' className='auth-input' placeholder="Full Name" prefix={<UserOutlined />} name='fullName' value={state.fullName} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input size='large' className='auth-input' placeholder="Email" prefix={<MailOutlined />} name='email' value={state.email} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input.Password size='large' className='auth-input' placeholder="Password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} name='password' value={state.password} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Input.Password size='large' className='auth-input' placeholder="Confirm Password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} name='confirmPassword' value={state.confirmPassword} onChange={handleChange} />
                            </Col>
                            <Col span={24}>
                                <Button className='btn btn-primary auth-btn' size='large' block loading={isProcessing} onClick={handleRegister}>Register</Button>
                            </Col>
                            <Col span={24}>
                                <p className='text-center'>Already have an account? <Link to='/auth/login' className='auth-link'>Login</Link></p>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </main>
    )
}
