import {useState, useEffect, useRef} from 'react';
import {Container, Nav, Navbar, Offcanvas} from 'react-bootstrap';
import MenusData from "../../data/menu.json";
import styles from './Header.module.css';

import { LuLock, LuUser, LuPenLine } from "react-icons/lu";
import { IoPawOutline, IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import { PiCompassFill, PiHandHeart, PiWarning } from "react-icons/pi";
import { RiSeedlingFill, RiCoinFill } from "react-icons/ri";
import { BsFillBookmarkHeartFill } from "react-icons/bs";


const Lock = LuLock as React.FC<React.SVGProps<SVGSVGElement>>;
const User = LuUser as React.FC<React.SVGProps<SVGSVGElement>>;

const iconMap = {
  Paw: IoPawOutline,
  Compass: PiCompassFill,
  Bookmark: BsFillBookmarkHeartFill,
  Seed: RiSeedlingFill,
  Chat: IoChatbubbleOutline,
  Heart: IoHeartOutline,
  Coin: RiCoinFill,
  HandHeart: PiHandHeart,
  Warning: PiWarning,
  Pen: LuPenLine,
};

type MenuItem = {
  title:string;
  to:string;
  icon:keyof typeof iconMap;
};

type MenuGroup = {
  menuId:string;
  label:string;
  menus:MenuItem[];
}




const Header: React.FC = () => {

  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenu = (menuId:string) => {
    setActiveMenuId(prev => (prev === menuId ? null : menuId));
  }

  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if(dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.nav-default')
      ){setActiveMenuId(null);}
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const activeMenuGroup = (MenusData as MenuGroup[]).find(
    group => group.menuId === activeMenuId
  )



  return(
    <>
    <Navbar expand="md" className={styles.header}>
      <Container fluid>
        <Navbar.Brand href="/" className={styles.logo}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="category"/>
        
        <Navbar.Offcanvas
          id="category"
          aria-labelledby="mobile-category"
          placement="end">

          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="mobile-category">Logo</Offcanvas.Title>
          </Offcanvas.Header>



          <Offcanvas.Body className="justify-content-between align-items-center">
            <Nav className="gap-4">

              {(MenusData as MenuGroup[]).map(menuGroup => (
                <Nav.Link
                  key={menuGroup.menuId}
                  className="nav-default"
                  onClick={() => handleMenu(menuGroup.menuId)}
                  >{menuGroup.label}
                  </Nav.Link>
              ))}
            </Nav>


            {activeMenuId && (
              <div ref={dropdownRef} className={styles.Panel}>
                {activeMenuGroup?.menus.map(menuItem =>(
                  <a
                    key={menuItem.title}
                    href={menuItem.to}
                    className={styles.dropItem}
                    >{menuItem.title}
                  </a>
                ))}
              </div>
            )}



            <Nav className={`ms-auto nav-small gap-2 ${styles.login}`}>

              <Nav.Link href="#" className='d-flex align-items-center gap-2'>
                <Lock className={styles.iconRight}/>로그인
              </Nav.Link>

              <Nav.Link href="#" className='d-flex align-items-center gap-2'>
                <User className={styles.iconRight}/>회원가입
              </Nav.Link>

              <Nav.Link href="#">마이페이지</Nav.Link>
            </Nav>

          </Offcanvas.Body>

        </Navbar.Offcanvas>
      </Container>

    </Navbar>
    </>
  )
}

export default Header;