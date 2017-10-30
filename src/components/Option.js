import React from 'react';

class Option extends React.Component{
  render(){
    return(
      <div className="option">
        <p className="option__text">{this.props.count}.{this.props.optionText}</p>
        <button
          className="button--link"
          onClick={()=>{this.props.handleDelete(this.props.optionText)}}
        >
          Remove
        </button>
      </div>
    )
  }
}

export default Option;
