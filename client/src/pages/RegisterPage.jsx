import {Col, Stack, Form, Button, Row, Alert} from 'react-bootstrap'
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function RegisterPage() {
    let [isButtonHover, setIsButttonHover] = useState(false);
    let buttonColor = "pink";
    let cl = "black";
    if (isButtonHover) {
        buttonColor = "lightpink";
        cl = "white";
    }

    const {registerInfo, updateRegisterInfo, registerUser, registerError, isRegisterLoading} = useContext(AuthContext);
    return (
        <Form onSubmit={registerUser}>
            <Row style={{justifyContent:"center", paddingTop:"10%"}}>
                <Col xs={4}>
                    <Stack gap={3}>
                        <h3 style={{color:"pink"}}>REGISTER</h3>
                        <Form.Control type="text" placeholder="Name"
                            onChange={(e) => {
                                updateRegisterInfo({...registerInfo, name: e.target.value})
                            }}
                        ></Form.Control>
                        <Form.Control type="email" placeholder="Email"
                            onChange={(e) => {
                                updateRegisterInfo({...registerInfo, email: e.target.value})
                            }}
                        ></Form.Control>
                        <Form.Control type="password" placeholder="Password"
                            onChange={(e) => {
                                updateRegisterInfo({...registerInfo, password: e.target.value})
                            }}
                        ></Form.Control>
                        <Button variant="primary" type="submit" 
                            style={{backgroundColor: buttonColor, border: buttonColor, color:cl, fontWeight: "bold"}}
                            onPointerEnter={() => setIsButttonHover(true)}
                            onPointerLeave={() => setIsButttonHover(false)}
                        >{isRegisterLoading ? "Creating your account" : "REGISTER"}</Button>
                        {registerError?.error && (
                            <Alert variant='danger'>
                            <p>{registerError?.message}</p>
                            </Alert>
                        )}
                    </Stack>
                </Col>
            </Row>
        </Form>
    );
};