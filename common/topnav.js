
class Topnav extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="topnav">
        <a href="/">메인</a>  
        <a href="/products">상품</a>
        <a href="/posts">블로그</a>
      </div>
    );
    
  }
}
 
ReactDOM.render(<Topnav />, document.getElementById('topnav'))
