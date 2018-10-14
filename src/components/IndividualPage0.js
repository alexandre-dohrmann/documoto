import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const PG0 = "http://localhost:8080/pages/PG0";


class IndividualPage0 extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            page0: [],
        }
    }

    nextPath(path) {
        this.props.history.push(path);
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
    }

    render() {
        let { isLoaded, page0 } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="page0">
                    <h1 className="indiv-page-header">Welcome to <span className="indiv-page-header-span">{page0.name.en}</span></h1>
                    <div className="header-img-div">
                        <div className="big-border">
                            <img className="indiv-page-img" src={page0.tags._thumbnail}></img>
                        </div>
                        <div className="details">
                            <button className="btn btn-primary btn-lg active details2" aria-pressed="true" onClick={() => this.nextPath('/pages/PG0/parts')}>View Details</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

}

export default withRouter(IndividualPage0);
