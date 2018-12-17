import React, { Component } from 'react'
import Notification from './Notification';

class Search extends Component {
 state = {
   searchValue: '',
 }

 handleInputChange = () => {
   this.setState({
    searchValue: this.search.value
   })
 }

 handleKeyPress = (event) => {
  if(event.key === 'Enter'){
    this.handleButtonClick();
  }
}

 handleButtonClick = () => {
    this.props.handleClick(this.state.searchValue)
 }

 renderNotification(){
   if(this.props.errorMsg){
     return (
      <div className="search-panel__error-msg">
        <Notification content={this.props.errorMsg} type="error" />
      </div>
     )
   }
 }

 render() {
   return (
     <div>
     <div className="search-panel">
      <div className="search-panel__label">
        {this.props.label}
      </div>
      <input
        className="search-panel__input"
        placeholder={this.props.placeholder}
        ref={input => this.search = input}
        onChange={this.handleInputChange}
        onKeyPress={this.handleKeyPress}
      />
      <button 
        className="search-panel__button"
        onClick={this.handleButtonClick}> 
        {this.props.buttonLabel} 
      </button>
      </div>

      {this.renderNotification()}
     </div>
   )
}
}

export default Search;
