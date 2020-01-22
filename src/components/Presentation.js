import React, { Component, Fragment } from 'react';



class Presentation extends Component {

  
  render() {
    return (
      <Fragment>
      <div className="presentation">
            <div><img className='avatar' src={require('../img/presentation/poussin.png')} /></div>

      		<div className="description">"{this.props.presentation}"</div>
      </div>
      </Fragment>
	)
  }
}


export default Presentation