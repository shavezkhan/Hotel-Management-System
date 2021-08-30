import React, { Component } from "react";
import { Button, Row , Col, Container} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import UserService from "../services/user.service";
import Usermenu from "./Sidenav/UserMenu";
import AddGuest from "./Guest/AddGuest";
import ViewGuest from "./Guest/ViewGuest";
import AddBooking from "./Booking/AddBooking";
import ViewBooking from "./Booking/ViewBooking";
import SearchRoom from "./Room/SearchRoom";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {

    return (

      <div className="userback">
        <Router>
        <ToastContainer />
        {/* <Container> */}
        <header className="text-center">
          <h1>This is Receptionist page.</h1>
        </header>
        <hr />
        <Row>
          <Col md={3}>
          <Usermenu />
          </Col>
          <Col md={9}>
          <Route path="/add-guest" component={AddGuest}  exact/>
          <Route path="/updateGuest/:code" component={AddGuest}  exact/>
          <Route path="/view-guests" component={ViewGuest}  exact/>
          <Route path="/room-available" component={SearchRoom}  exact/>
          <Route path="/add-booking" component={AddBooking}  exact/>
          <Route path="/updateBooking/:id" component={AddBooking}  exact/>
          <Route path="/view-bookings" component={ViewBooking}  exact/>
          </Col>
        </Row>
        {/* </Container> */}
        </Router>
      </div>
    );
  }
}
