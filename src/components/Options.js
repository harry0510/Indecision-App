import React from 'react';
import Option from "./Option";

class Options extends React.Component{
  render(){
    return(
      <div>
        <div className="wigdet-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button
            className="button--link"
            onClick={this.props.handleDeleteOptions}
          >
            Remove All
          </button>
        </div>
        {this.props.options.length === 0 && <p className="widget__message">Please add some activities</p>}
        {
        this.props.options.map(
          (option,index) =>
          <Option
            key={option}
            optionText={option}
            count={index+1}
            handleDelete={this.props.handleDelete}
          />
        )
        }
      </div>
    )
  }
}

export default Options;
