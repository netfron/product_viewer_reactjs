
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="row">
        <div className="column side"></div>
        <div className="column">
          Hello World!
        </div>
        <div className="column side"></div>
      </div>
    );
    
  }
}
 
ReactDOM.render(<App />, document.getElementById('root'))
