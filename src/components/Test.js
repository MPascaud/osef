import React, { Component, Fragment } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';



class Test extends Component {
  componentDidMount(){

    const ps = new PerfectScrollbar('#Test', {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});
  }
  render() {
    
    return(
        <div className="Test" id="Test">
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
        <p>dbde</p>
      </div>
    )
  }
}

export default Test




