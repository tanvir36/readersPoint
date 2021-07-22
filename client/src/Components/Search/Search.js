import './Search.scss';
import {Component} from 'react'; 
 class Search extends Component {
    render() {
        return(
            <form className="search">
                <input className="search__input" type="text" placeholder="SEARCH"/>
            </form>
        ) 
    }
     
 }
  
 export default Search