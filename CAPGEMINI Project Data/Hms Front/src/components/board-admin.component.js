import React, { Component } from "react";
import { Col, Container, Row } from 'reactstrap';

import UserService from "../services/user.service";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminMenu from "./Sidenav/AdminMenu";

import AddRoom from "./Room/AddRoom";
import AddEmployee from "./Employee/AddEmployee";
import ViewEmployee from "./Employee/ViewEmployee";
import ViewRooms from "./Room/ViewRooms";
import UpdateRoom from "./Room/UpdateRoom";
import Moderatormenu from "./Sidenav/ModeratorMenu";
import Register from "./register.component";

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      // error => {
      //   this.setState({
      //     content:
      //       (error.response &&
      //         error.response.data &&
      //         error.response.data.message) ||
      //       error.message ||
      //       error.toString()
      //   });
      // }
    );
  }

  render() {
    return (
      <div className="adminback">
        <Router>
          <ToastContainer />
        <header>
          <h1 className="text-center">Welcome To Admin Page.</h1>
        </header>
        <hr />
        <Row>
          <Col md={3}>
          <Moderatormenu />
          </Col>
          <Col md={9}>
            <Route path="/add-room" component={AddRoom}  exact/>
            <Route path="/view-rooms" component={ViewRooms}  exact/>
            <Route path="/update-rooms/:roomNum" component={UpdateRoom}  exact/>
            <Route path="/add-employee" component={AddEmployee}  exact/>
            <Route path="/view-employees" component={ViewEmployee}  exact/>
            <Route exact path="/register" component={Register} />
            <hr />
          </Col>
        </Row>
        </Router>
      </div>
    );
  }
}
