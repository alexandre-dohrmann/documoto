import React, { Component } from 'react';

const PG0 = "http://localhost:8080/pages/PG0";
const partsPG0 = "http://localhost:8080/pages/PG0/parts";



class IndividualPage0 extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            page0: [],
            parts: []
        }
    }

    componentDidMount() {
        fetch(PG0)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    page0: json,
                })
            })
        fetch(partsPG0)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    parts: json,
                })
            })
    }

    render() {
        let { isLoaded, page0, parts } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="page0">
                    <h1 className="indiv-page-header"><span className="indiv-page-header-span">{page0.name.en}</span></h1>
                    <div className="header-img-div">
                        <div className="big-border">
                            <img className="indiv-page-img" src={page0.tags._thumbnail} alt="page-img"></img>
                        </div>
                        <div className="parts">
                            {parts.map(part =>
                                <div className="indiv-part">
                                    <img className="part-thumbnail" src={part.tags._thumbnail} alt="part-img" />
                                    <div className="part-details">
                                        <h4 className="part-name" key={part.name.en}>{part.name.en}</h4>
                                        <h5 className="part-id" key={part.id}>Part ID: <span className="parts-description">{part.id}</span></h5>
                                        <h5 className="part-number" key={part.partNumber}>Part Number: <span className="parts-description">{part.partNumber}</span></h5>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default IndividualPage0;
