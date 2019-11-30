import React from 'react'

class Square extends React.Component {
/*	  constructor(props) {
    super(props)
    this.state= {
       value:""
    }
    this.handleClick = this.handleClick.bind(this);

  }*/

	render(){
		return(
          <button 
          className="square"
          onClick = {() => this.props.onClick()}
          
          > 
          {this.props.value} 
          </button>
			)
	}
}
export default Square