import './Search.scss';
import {Component} from 'react'; 
import axios from 'axios';
 class Search extends Component {
    state={
        search: "",
        books: [],
    };

        componentDidMount() {
            const API_URL= "https://www.googleapis.com/books/v1/volumes?";
            const API_KEY= process.env.REACT_APP_API_KEY;
            console.log(API_KEY);
            axios.get(`${API_URL}q=javascript&maxResults=40&key=${API_KEY}`)
            .then((response)=>{ 
                console.log(response.data.items[1].volumeInfo.imageLinks.thumbnail) ;
                this.setState({
                books: response.data.items,
                }) ;    
            })
            .catch(error=>{
                console.log(error);
            });        
        }
        componentDidUpdate(prevState) {
            const API_URL= "https://www.googleapis.com/books/v1/volumes?";
            const API_KEY= process.env.REACT_APP_API_KEY;
            if (this.state.search!=prevState.search){
                axios.get(`${API_URL}q=${this.state.search}&maxResults=40&key=${API_KEY}`)
                .then(response=>{    
                    console.log(response.data.items);
                    this.setState({
                        books: response.data.items,
                    });   
                })
            } 
        }
        submitHandler=(event)=>{
            event.preventDefault(); 
                
            this.setState({
                search: event.target.search.value,   
            });
            event.target.reset();
        }

    render() {      
        return(
            <section>
                <form className="search" method = "post" onSubmit={this.submitHandler}>
                <input id="search" className="search__input" type="text" placeholder="SEARCH"/>
                </form>

                <div className="books">
                    {this.state.books.map(book=>{
                        return(
                        <div className="books__card">
                            <a target="_blank" href= {`https://books.google.ca/books?id=${book.id}&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false`}>
                                 {book.volumeInfo.imageLinks && <img  src={book.volumeInfo.imageLinks.thumbnail} alt="cover missing"/>} 
                            </a>
                           
                        </div>
                        )
                    })}
                </div>
            </section> 
        ) 
    }   
 } 
 export default Search