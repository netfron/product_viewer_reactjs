const PostList = (props) => {
  console.log(props);
  return (
    <div className="row">
      <div className="column side"></div>
      <div className="column">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className="column side"></div>
    </div>
  );
}

class Posts extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      items: []
    };
  }

  componentDidMount() {
    fetch("/api/posts/list.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }  

  render() {
    const { error, items } = this.state;

      return (
        <div>
        { items.map(item => <PostList title={item.title} content={item.content}
          key={item.id.toString()} id={item.id} />)
        }
        </div>
      );

  }
}
 
ReactDOM.render(<Posts />, document.getElementById('root'))
