import React, { Component, Fragment } from 'react';
import { useParams } from 'react-router-dom';

class Test extends Component {

    render() {
        const id = this.props.match.params.id;
        return (
          <Fragment>
              <h2>Id from params: {id}</h2>
          </Fragment>
        )
    }
}

export default Test;
