import React, { Component } from 'react';

const PG2 = "http://localhost:8080/pages/PG2";


class IndividualPage2 extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            page2: [],
        }
    }

    componentDidMount() {
        fetch(PG2)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    page1: json,
                })
            })
    }
    render() {
        let { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <h4>THIS IS PAGE 2</h4>
            )
        }
    }

}

export default IndividualPage2;
