import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import NavDetail from "../../components/NavDetail";
import MenusData from "../../data/menu.json";
import styles from './Header.module.scss';

const Header = () => {
  return(
    <>
    <Navbar expand="md" className={styles.header}>
      <Container fluid>
        <Navbar.Brand href="/" className={styles.logo}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basicNav" />

        <Navbar.Offcanvas
          id="basicNav"
          aria-labelledby="basicLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="basicLabel">Logo</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="justify-content-between">
            <Nav>
              {MenusData.map(({ menuId, title, menus }) => (
                <NavDetail
                  key={menuId}
                  menuId={menuId}
                  title={title}
                  menus={menus}
                />
              ))}
            </Nav>

            
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  )
};

export default Header;