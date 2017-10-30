import React from "react";
import Modal from 'react-modal';

import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleActions = this.handleActions.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.state={
      options : [],
      selectedOption : undefined
    }
  }
  componentDidMount(){
    try {
      console.log("componentsDidMount");
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      // console.log("These are the things available in the local storage",options);
      if (options){
        this.setState(()=>({options}));
      }
    } catch (e) {
      //Nothing
    }


  }
  componentDidUpdate(prevState,prevProps){
    console.log("componentDidUpdate");

    const json = JSON.stringify(this.state.options)
    localStorage.setItem("options",json);
  }

  handleDeleteOptions(){
    this.setState({
      options : []
    });
  }
  handleActions(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(()=>({selectedOption:option}));
  }

  handleDelete(optionToRemove){
    this.setState((prevState)=>({
        options : prevState.options.filter((option) => optionToRemove !== option)
    }));
  }

  handleModal(){
    this.setState(()=>({selectedOption:undefined}));
  }

  handleAddOption(option){
    if (!option){
      console.log("no value");
       return "Enter a valid value";
    }
    else if(this.state.options.indexOf(option)>-1){
      return "This option has already been added";
    }

    this.setState((prevState) => {
      return {
        options : prevState.options.concat(option)
      }
    })
  }
  render(){
    const title = "Indecision"
    const subtitle = "Put your life into the hands of a computer"
    return(
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <div className="container">
          <Action
            options={this.state.options}
            handleActions={this.handleActions}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDelete = {this.handleDelete}
            />

            <AddOption
              options={this.state.options}
              handleAddOption ={this.handleAddOption}
            />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleModal = {this.handleModal}
          />
        </div>
      </div>
    )
  }
}

export default IndecisionApp;
