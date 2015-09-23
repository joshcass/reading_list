var MarkRead = React.createClass({
    clickHandler: function(){
       this.props.updateHandler(this.props.linkId)
    },

   render: function(){
           if (this.props.isRead){
              return(
               <button className="tiny" onClick={this.clickHandler}>
                   Mark Unread
               </button>)
           } else {
             return(
              <button className="tiny" onClick={this.clickHandler}>
                   Mark Read
              </button>)
           }
   }   

});