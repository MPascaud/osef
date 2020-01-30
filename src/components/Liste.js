import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Graine from '../components/Graine'



const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};

class Liste extends Component {

	state = {
    // items: Array.from({ length: 20 }),
    graines: Object.keys(this.props.graines).map(i => this.props.graines[i]),
  };

  componentDidMount () {
	  console.log(this.state.items);
	  // console.log(typeof this.state.items);
	  // console.log(this.state.items.length);
	  console.log(this.state.graines);
	  // console.log(typeof this.state.graines);
	  // console.log(this.state.graines.length);

	  // console.log(Object.keys(this.state.graines).map(key => this.state.graines[key]));

  }

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        // items: this.state.items.concat(Array.from({ length: 20 })),
      });
    }, 1500);
    console.log(this.state.tmp);
  };


	render () {
	  	// const graines = Object.keys(this.state.graines).map(key => this.state.graines[key])

	  	// console.log('coucou', this.state.graines[1].variete)
		return (
			<Fragment>
			  <div>
      
        		<div id="scrollableDiv">
          			<InfiniteScroll
			            dataLength={this.state.graines.length}
			            next={this.fetchMoreData}
			            hasMore={false}
			            loader={<h4>Loading...</h4>}
			            scrollableTarget="scrollableDiv"
			            // endMessage="coucou"
         			>
            			{this.state.graines.map((i, index) => (
              				// <div style={style} key={index}>
              					<Graine caracs={this.state.graines[index]} style={this.props.style}/>
            				// </div>
          				))}
          			
          			</InfiniteScroll>
        		</div>

      		  </div>
			</Fragment>
		)
	}
}
export default Liste