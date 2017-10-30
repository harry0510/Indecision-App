import React from 'react';

class Header extends React.Component{
  render(){
    return(
      <div className="header">
        <div className="container">
          <h1 className="header__title">{this.props.title}</h1>
          <p className="header__subtitle">{this.props.subtitle}</p>
        </div>
      </div>
    )
  }
}

export default Header;
