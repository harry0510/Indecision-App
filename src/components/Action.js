import React from 'react';

class Action extends React.Component{
  render(){
    var hasOptions = this.props.options.length>0;
    return(
      <div>
        <button
          className="big-button"
          onClick={this.props.handleActions}
          disabled={!hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

export default Action;
