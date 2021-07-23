import './Search.scss';
import {Component} from 'react'; 
import axios from 'axios';
 class Search extends Component {
    state={
        search: "",
    };

    
    submitHandler=(event)=>{
        event.preventDefault();       
        this.setState({
            search: event.target.search.value,
        });
    }

    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=motivational&key=AIzaSyCwi5Na0Td3fv6QHlLcLTtvlGIuiRCbkxE`)
        .then((response)=>{      
        })
        .catch(error=>{
            console.log(error);
        });        
    }
    componentDidUpdate() {
        if (this.state.search){
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyCwi5Na0Td3fv6QHlLcLTtvlGIuiRCbkxE`)
            .then(response=>{       
            })
        } 
    }
    render() {
        return(
            <form className="search" onSubmit={this.submitHandler}>
                <input id="search" className="search__input" type="text" placeholder="SEARCH"/>
            </form>
        ) 
    }   
 } 
 export default Search