class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count :0
    }
  }
  render(){
    return(
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=> this.setState(
          (prevState)=>{
            return{
              count:prevState.count+1
            }
          })}
          >
            +
          </button>
          <button onClick={()=> this.setState(
            (prevState)=>{
              return{
                count:prevState.count-1
              }
            })}
            >
              -
            </button>
            <button onClick={()=> this.setState({count: 0})}>Reset</button>
      </div>
    )
  }
}

class Visibility extends React.Component{
  constructor(){
    super();
    this.state = {
      visibility : false
    }
  }
  render(){
    return(
      <div>
        <button onClick={()=>this.setState(
          (prevState)=>{
            return {
              visibility : !prevState.visibility
          }
        })}>
          {this.state.visibility? "Hide Counter" : "Show counter"}
        </button>
        {this.state.visibility && (<Counter />)}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />,document.getElementById('app'));
