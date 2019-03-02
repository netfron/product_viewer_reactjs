
class Header extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="header">
        <h1>React App</h1>
        <p>리엑트 사이트입니다. 뭘할 수 있을까요</p>
      </div>
    );
    
  }
}
 
ReactDOM.render(<Header />, document.getElementById('header'))
