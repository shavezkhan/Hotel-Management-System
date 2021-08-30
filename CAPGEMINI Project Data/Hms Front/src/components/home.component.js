import React, { Component } from "react";
import "./Home.css";
import UserService from "../services/user.service";
// import "../../node_modules/bootstrap/dist/css/bootsrap.min.css";
import { Container, Row, Col } from "react-grid-system";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      }
    );
  }

  render() {
    return (
        <div className="homeback">
                <div className="img1">
                    <div className="text">
                        <span className="border">
                            Welcome To Khan Hotel
                        </span>
                    </div>
                </div> 
            </div>
         );
  }
}
