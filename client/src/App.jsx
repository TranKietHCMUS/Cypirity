import {Routes, Route, Navigate} from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from 'react-bootstrap';
import NavBar from './components/NavBar';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import PostStory from './pages/PostStory';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Container >
        <Routes>
          <Route path="/" element={<StoryPage/>} />
          <Route path="users/register" element={user ? <PostStory/> : <RegisterPage />}/>
          <Route path="users/login" element={user ? <PostStory/> : <LoginPage />} />
          <Route path="*"  element={<Navigate to="/" />}/>
          <Route path="/users/poststory" element={user ? <PostStory/> : <LoginPage />}/>
        </Routes>
      </Container>
    </>
  )
}

export default App;
