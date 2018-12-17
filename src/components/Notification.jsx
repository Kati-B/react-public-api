import React, { Component } from 'react'

class Notification extends Component {

 render() {
   return (
    <div className="notification-panel"> 
        <div className={`notification-panel--${ this.props.type}`}> 
            <div className="notification-panel__content">
                { this.props.content }  
            </div>
        </div>
     </div>
   )
 }
}

export default Notification
