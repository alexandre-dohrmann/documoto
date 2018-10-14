import React, { Component } from 'react';

const PG2 = "http://localhost:8080/pages/PG2";
const partsPG2 = "http://localhost:8080/pages/PG2/parts";



class IndividualPage2 extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            page2: [],
            parts: [],
        }
    }

    componentDidMount() {
        fetch(PG2)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    page2: json,
                })
            })
        fetch(partsPG2)
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
                    <h1 className="indiv-page-header"><span className="indiv-page-header-span">This is Page 2</span></h1>
                </div>
            )
        }
    }

}

export default IndividualPage2;
