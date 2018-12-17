import React, { Component } from 'react'

class PageNotFound extends Component {

 render() {
   return (
    <div className="not-found"> 
            <div className="not-found__content">
                <p className="not-found__content--red-text">404 - page not found</p>
                <a href="/">Press to return to the searching page</a>
            </div>
            
     </div>
   )
 }
}

export default PageNotFound
