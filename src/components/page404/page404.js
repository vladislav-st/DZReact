import React, { Component, Fragment, Navbar, Brand } from 'react';
import './page404.css';


class Page404 extends Component {

    render() {
        return (
            <Fragment>
                <div className="html-wrapper">

                <div className="error">404</div>
                <br /><br />
                <span className="info">File not found</span>
                <img src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif" class="static" />
                </div>
            </Fragment>
        )
    }
}

export default Page404;