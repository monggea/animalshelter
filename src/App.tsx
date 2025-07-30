import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';

import Header from './layout/header/Header';
import Footer from './layout/Footer';
import Nav from './layout/nav/Nav';
import Gallery from './pages/Gallery';
import Notice from './pages/notice/Notice';
import Post from './pages/Category';

function App() {
  return (
    <>
    <Header/>
    {/* <Nav/> */}
    
    <Container fluid>
      <Row>
      <Gallery/>
      <Notice/>
      <Post/>

     </Row>
    </Container>
    </>
  );
}

export default App;
