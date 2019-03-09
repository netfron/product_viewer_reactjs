const ProductList = (props) => {
  console.log(props);
  return (
    <div className="row">
      <div className="column side"></div>
      <div className="column">
        <div>
          <div className="product-img">
            <p><img src={props.main_img} className="main-img" /></p>
          </div>
          <div className="product-detail">
            <h2>{props.name}</h2>
            <p>카테고리 : {props.category_id}</p>
            <p>브랜드 : {props.brand}</p>
            <p>가격(원) : {props.price}원</p>
          </div>
        </div>
      </div>
      <div className="column side"></div>
    </div>
  );
}
const TeamList = (props) => {
  console.log(props);
  return (
    <li>
      <h5><a href="#">#{props.name}</a></h5>
    </li>
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
    this._loadTeamData();     
    this._loadCategoryData();
    this._loadItemData();
    //console.log(this.state);
  }  

  // 상품 가져오기
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
  // 팀정보 가져오기
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
  // 카테고리 가져오기
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
  //카테고리 코드를 이름으로 리턴
  _getCategoryName(id){ 
    var categories = this.state.categories;
    for (const item of categories) {
      if (item.id === id) {
        return item.name;
      }
    }
    return 'N/A';
  } 
  render() {
    const { error, isLoaded, items, teams, categories } = this.state;

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
            <div>
              <ul className="tags">
              { teams.map(item => <TeamList 
              name={item.name} 
              key={item.id.toString()} 
              id={item.id} 
              />)
              }
              </ul>
            </div>
            </div>
            <div className="column side"></div>
          </div>                
          <div>
          { items.map(item => <ProductList 
            name={item.name} 
            category_id={this._getCategoryName(item.category_id)}
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
