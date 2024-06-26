import {Container, Nav, Navbar, Stack} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function NavigationBar() {
    const [isLoginHover, setIsLoginHover] = useState(false);
    const [isRegisterHover, setIsRegisterHover] = useState(false);
    const [isLogoutHover, setIsLogoutHover] = useState(false);
    let loginColor = "pink";
    let registerColor = "pink";
    let logoutColor = "pink";
    if (isLoginHover) loginColor = "white";
    if (isRegisterHover) registerColor = "white";
    if (isLogoutHover) logoutColor = "white";

    const {user, logoutUser} = useContext(AuthContext);
    return (
        <Navbar bg="dark" className="mb-4" style={{height: "3.75rem"}}>
            <Container>
                <h2>
                    <Link to="/" className='text-decoration-none' style={{color:"pink"}}>Cypirity</Link>
                </h2>
                {
                    user && (<span className='text-warning'>Logged in as {user?.name}</span>)
                }
                <Nav>
                    <Stack direction="horizontal" gap="3">
                        {user && (
                            <>
                            <Link to="/" 
                                className='text-decoration-none'
                                style={{color:logoutColor}}
                                onPointerEnter={() => setIsLogoutHover(true)}
                                onPointerLeave={() => setIsLogoutHover(false)}
                            >Stories</Link>
                            <Link to="users/login" onClick={() => logoutUser()} 
                                className='text-decoration-none'
                                style={{color:logoutColor}}
                                onPointerEnter={() => setIsLogoutHover(true)}
                                onPointerLeave={() => setIsLogoutHover(false)}
                            >Logout</Link>
                            </>
                        )}
                        {!user && (
                            <>
                                <Link to="users/login" className='text-decoration-none' 
                                    style={{color:loginColor}}
                                    onPointerEnter={() => setIsLoginHover(true)}
                                    onPointerLeave={() => setIsLoginHover(false)}
                                >Login</Link>
                                <Link to="users/register" className='text-decoration-none' 
                                    style={{color:registerColor}}
                                    onPointerEnter={() => setIsRegisterHover(true)}
                                    onPointerLeave={() => setIsRegisterHover(false)}
                                >Register</Link>
                            </>
                        )}
                    </Stack>
                </Nav>
            </Container>
        </Navbar>
    );
};