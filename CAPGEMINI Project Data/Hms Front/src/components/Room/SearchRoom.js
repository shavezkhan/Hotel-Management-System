import { Button, ButtonGroup, Card } from 'reactstrap';
import React, { Component } from 'react';
import { toast } from "react-toastify"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SearchRoom extends Component {
    constructor(props){
        super(props)
        this.state={
            rooms : []
            
        };
    }

    componentDidMount(){
        this.getRooms();  
    }
    getRooms(){
        axios.get("http://localhost:9090/roomapi/roomstatus/Available")
        .then(response => response.data)
        .then((data)=>{
            this.setState({rooms: data})
        });
    };

    // keyChange = event => {
    //     this.setState({
    //         [event.target.name]:event.target.value
    //     });
    // };

    // firequerry = () => {
    //     axios.get("http://localhost:9090/roomapi/roomstatus/")
    // }


    render() {
        return (
            <div>
                <Card>
                {/* <div>
                    <input name="searchkey" value={this.state.searchkey} onChange={this.keyChange}></input>
                    <Button onClick={this.firequerry.bind()}>Search</Button>
                </div> */}
                <h2 className="text-center"> Room Data </h2>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Room Number</th>
                                <th>Room Type</th>
                                <th>Room Feature</th>
                                <th>Room Capacity</th>
                                <th>Room Price</th>
                                <th>Room Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.rooms.length ===0 ?
                                <tr>
                                    <td colSpan="6">No Rooms Available.</td>
                                </tr>:
                                this.state.rooms.map(
                                    room =>
                                    <tr key ={room.id}>
                                        <td>{room.roomNum}</td>
                                        <td>{room.roomType}</td>
                                        <td>{room.roomFeatures}</td>
                                        <td>{room.roomCapacity}</td>
                                        <td>{room.roomPrice}</td>
                                        <td>{room.roomStatus}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
                </Card>
            </div>
        )
    }
}
