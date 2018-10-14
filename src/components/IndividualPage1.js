import React, { Component } from 'react';

const PG1 = "http://localhost:8080/pages/PG1";


class IndividualPage1 extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            page1: [],
        }
    }

    componentDidMount() {
        fetch(PG1)
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
                <h4>THIS IS PAGE 1</h4>
            )
        }
    }

}

export default IndividualPage1;
