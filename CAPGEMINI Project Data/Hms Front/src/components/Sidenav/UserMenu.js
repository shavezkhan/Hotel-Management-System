import React from "react"
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

const Usermenu=()=>{
    return(

        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-guest" action>
                Add Guest
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-guests" action>
                View Guest
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-booking" action>
                Make Reservation
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-bookings" action>
                View All Reservation
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/room-available" action>
                Search Available Room
            </Link>
        </ListGroup>

    )
}

export default Usermenu;