const ProductList = (props) => {
  console.log(props);
  return (
    <div className="row">
      <div className="column side"></div>
      <div className="column">
        <h2>{props.name}</h2>
        <p>{props.category_id}</p>
        <p>{props.brand}</p>
        <p>{props.price}원</p>
        <p><img src={props.main_img} /></p>
      </div>
      <div className="column side"></div>
    </div>
  );
}
const TeamList = (props) => {
  console.log(props);
  return (
    <span>
      <h2>#{props.name}</h2>
    </span>
  );
}

class Products extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      teams: [],
      categories: []
    };
  }

  componentDidMount() {
    this._loadItemData();
    this._loadTeamData();
    //this._loadCategoryData();
    //console.log(this.state);
  }  
  _loadItemData() {
    fetch("/api/products/list.json")
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
  _loadTeamData() {
    fetch("/api/products/teams.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,                     
            teams: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,                     
            error
          });
        }
      )
  }  
  _loadCategoryData() {
    fetch("/api/products/categories.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            // isLoaded: true,            
            categories: result
          });
        },
        (error) => {
          this.setState({
            // isLoaded: true,            
            error
          });
        }
      )
  }  
  render() {
    const { error, isLoaded, items, teams } = this.state;

    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // } else if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {
      return (
        <div>

          <div className="row">
            <div className="column side"></div>
            <div className="column">
            { teams.map(item => <TeamList 
            name={item.name} 
            key={item.id.toString()} 
            id={item.id} 
            />)
            }
            </div>
            <div className="column side"></div>
          </div>                
          <div>
          { items.map(item => <ProductList 
            name={item.name} 
            category_id={item.category_id}
            brand={item.brand} 
            main_img={item.main_img}
            price={item.price}        
            key={item.id.toString()} 
            id={item.id} 
          />)
          }
          </div>
        </div>
      );
    // }
    
  }
}
 
ReactDOM.render(<Products />, document.getElementById('root'))
