import React, { Component } from 'react';



const pageList = "http://localhost:8080/pages";



class PagesContainer extends Component {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            pages: [],
        }
    }

    componentDidMount() {
        fetch(pageList)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    pages: json,
                })
            })
    }


    render() {
        let { isLoaded, pages } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <div className="pages-list-div">
                    <h3 className="pages-description">Below is Documoto's "Bill of Materials" list.<br />Each page will give you insights into individual complex equipment parts.<br />Select an individual page below to see its' details and parts:</h3>
                    <ul className="pages-list">
                        {pages.map(page => (
                            <li className="indiv-page" key={page.id}>{page.id}:<br />
                                <a className="nav-links-pages" href={`/pages/${page.id}`}>{page.name.en}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}


export default PagesContainer;