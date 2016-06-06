/*
  Name : promptDB
  Welcome Page
  By : Theppasith N.
*/
import React from "react";
import CardContainer from "./CardContainer";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery"

import {Panel} from 'react-bootstrap';

// Main Entry of this app
class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  // Routing
  render(){
        return (
          <div>
              <Header/>
              <br/>
              <div className="container">
                  <Panel bsStyle="success" header="Greetings">
                      <h2>ยินดีต้อนรับเข้าสู่ระบบลงทะเบียนศิษย์เก่า </h2>
                      <hr/>
                      <center>
                      การใช้งานระบบ ต้องทำการ Login เข้าสู่ระบบด้วย Facebook ก่อน หลังจากนั้นจึงทำการลงทะเบียน
                      <br/>หากลงทะเบียนแล้ว จะเป็นการแก้ไขข้อมูลส่วนตัวของตนเอง

                      ผู้ใช้งานสามารถเปิดดูฐานข้อมูลอื่นๆได้เช่นกัน
                      </center>
                  </Panel>
              </div>
              <Footer/>

          </div>
        );
  }
}

export default WelcomePage;
