import React, {PropTypes} from 'react';
import {Nav,Navbar, NavItem , NavDropdown , MenuItem} from "react-bootstrap";
export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{marginBottom : 50+"px"}} inline>
          <Navbar fixedTop={true} bsStyle="inverse">
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">PROMPT51</a>
              </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                          <NavItem eventKey={1} href="#"> หน้ารวม </NavItem>
                          <NavItem eventKey={2} href="#"> กรอกข้อมูลสมาชิกใหม่ </NavItem>
                          <NavDropdown eventKey={3} title="ดูข้อมูลศิษย์เก่า" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}> ห้อง 1 </MenuItem>
                            <MenuItem eventKey={3.2}> ห้อง 2 </MenuItem>
                            <MenuItem eventKey={3.3}> ห้อง 3 </MenuItem>
                            <MenuItem eventKey={3.4}> ห้อง 4 </MenuItem>
                            <MenuItem eventKey={3.5}> ห้อง 5 </MenuItem>
                            <MenuItem eventKey={3.6}> ห้อง 6 </MenuItem>
                            <MenuItem eventKey={3.7}> ห้อง 7 </MenuItem>
                            <MenuItem eventKey={3.8}> ห้อง 8 </MenuItem>
                            <MenuItem eventKey={3.9}> ห้อง 9 </MenuItem>
                            <MenuItem eventKey={3.10}> ห้อง 10 </MenuItem>
                            <MenuItem eventKey={3.11}> ห้อง 11 </MenuItem>
                            <MenuItem eventKey={3.12}> ห้อง 12 </MenuItem>
                            <MenuItem eventKey={3.13}> ห้อง EP </MenuItem>
                            {/*<MenuItem divider />*/}
                          </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                            <NavItem> fb.loginStatus </NavItem>
                            <NavItem> fb.logoutButton </NavItem>
                    </Nav>
              </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}
