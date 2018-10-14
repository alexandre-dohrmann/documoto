import React, { Component } from 'react';

const PG1 = "http://localhost:8080/pages/PG1";
const partsPG1 = "http://localhost:8080/pages/PG1/parts";


class IndividualPage1 extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            page1: [],
            parts: []
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
        fetch(partsPG1)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    parts: json,
                })
            })
    }
    render() {
        let { isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="page0">
                    <h1 className="indiv-page-header"><span className="indiv-page-header-span">This is Page 1</span></h1>
                </div>
            )
        }
    }

}

export default IndividualPage1;
