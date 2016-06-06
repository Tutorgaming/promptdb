/*
  Name : promptDB
  Header Bar (Including Gallery) Here
  By : Theppasith N.
*/
import React, {PropTypes} from 'react';
import {Nav,Navbar, NavItem , NavDropdown , MenuItem} from "react-bootstrap";
import Gallery from "./Gallery";
import {LinkContainer} from 'react-router-bootstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div style={{marginBottom : 50+"px"}} inline>
          <Navbar fixedTop={true} bsStyle="inverse">
            <Navbar.Header>
              <Navbar.Brand>
                <LinkContainer to="/"><a>PROMPT51</a></LinkContainer>
              </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                          <LinkContainer to="/displayAll"><NavItem eventKey={1}> ดูข้อมูลรวม </NavItem></LinkContainer>
                          <LinkContainer to="/register"><NavItem eventKey={2}>ลงทะเบียน</NavItem></LinkContainer>
                          <NavDropdown eventKey={3} title="ดูข้อมูลศิษย์เก่า" id="basic-nav-dropdown">
                            <LinkContainer to="/displayRoom/1"><MenuItem eventKey={3.1}> ห้อง 1 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/2"><MenuItem eventKey={3.2}> ห้อง 2 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/3"><MenuItem eventKey={3.3}> ห้อง 3 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/4"><MenuItem eventKey={3.4}> ห้อง 4 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/5"><MenuItem eventKey={3.5}> ห้อง 5 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/6"><MenuItem eventKey={3.6}> ห้อง 6 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/7"><MenuItem eventKey={3.7}> ห้อง 7 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/8"><MenuItem eventKey={3.8}> ห้อง 8 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/9"><MenuItem eventKey={3.9}> ห้อง 9 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/10"><MenuItem eventKey={3.10}> ห้อง 10 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/11"><MenuItem eventKey={3.11}> ห้อง 11 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/12"><MenuItem eventKey={3.12}> ห้อง 12 </MenuItem></LinkContainer>
                            <LinkContainer to="/displayRoom/EP"><MenuItem eventKey={3.13}> ห้อง EP </MenuItem></LinkContainer>
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
      <Gallery />
      </div>
    );
  }
}
