import React from "react";
import { withRouter } from 'react-router-dom';


class HomePage extends React.Component {

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {

        return (
            <div className="homepage">
                <div className="documoto-home">
                    <img className="app-logo2" src={"/images/documoto-hp.png"} alt="documoto-logo" /><br /><br />
                    <h3 className="docu-info">Welcome to Documoto's JavaScript Test Documents.<br />Click the button below to enter the site!</h3>
                    <button className="btn btn-primary btn-lg active" aria-pressed="true" onClick={() => this.nextPath('/pages')}>Enter Here</button>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage);
