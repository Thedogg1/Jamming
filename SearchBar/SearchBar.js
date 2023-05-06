import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component{
render(){
const search=(
<div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <button className="SearchButton">SEARCH</button>
</div>

);
return search;

}

}
     export default SearchBar;

   


    
