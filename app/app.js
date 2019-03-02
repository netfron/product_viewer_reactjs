const PostList = (props) => {
  console.log(props);
  return (
    <div class="row">
      <div class="column side" />
      <div class="column">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div class="column side" />
    </div>
  );
}

class App extends React.Component {

  state = {
    post: [
      {id: 1, title: 'hi1', content: 'hihi1'},
      {id: 2, title: 'hi2', content: 'hihi2'},
      {id: 3, title: 'hi3', content: 'hihi3'},
      {id: 4, title: 'hi4', content: 'hihi4'},
      {id: 5, title: 'hi1', content: 'hihi1'},
      {id: 6, title: 'hi2', content: 'hihi2'},
      {id: 7, title: 'hi3', content: 'hihi3'},
      {id: 8, title: 'hi4', content: 'hihi4'},      
    ]
  };

  render() {
    return (
      <div>
        { this.state.post.map(item => <PostList title={item.title} content={item.content}
          key={item.id.toString()} id={item.id} />)
        }
      </div>
    );
  }
}
 
ReactDOM.render(<App />, document.getElementById('posts'))
