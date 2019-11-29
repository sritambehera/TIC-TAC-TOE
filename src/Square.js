import React from 'react'

class Square extends React.Component {
	  constructor(props) {
    super(props)
    this.state= {
       var:""
    }
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick(){
    this.setState({var: "hi"})
    }
	render(){
		return(
          <button onClick = {this.handleClick} className="square"> {this.state.var} </button>
			)
	}
}
export default Square