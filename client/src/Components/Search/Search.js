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

    render() {
        return(
            <form className="search" onSubmit={this.submitHandler}>
                <input id="search" className="search__input" type="text" placeholder="SEARCH"/>
            </form>
        ) 
    }   
 } 
 export default Search