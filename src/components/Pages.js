import React, { Component } from 'react';



class Pages extends Component {
    constructor() {
        super();
        this.state = {
            pages: []
        }
    }
    getPages = async () => {
        const pages = await fetch('REACT_APP_REST_API_LOCATION', {
            method: 'GET'
        });
        const pagesJson = await pages.json();
        this.setState({
            pages: [
                pages.id
            ]
        })
        return pagesJson;
    }
    render() {
        return (
            <div className="pages-list">
                <h1>{this.getPages}</h1>
            </div>
        );
    };
}


export default Pages;