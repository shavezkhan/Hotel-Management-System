import React, { Component } from 'react';

class FooterComponent extends Component {
    constructor(props){
        super(props)

        this.state={

        }
    }


    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted"> All Rights Reserved Khan Hotel @Capgemini Project By Mohd Shavez Khan. </span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;