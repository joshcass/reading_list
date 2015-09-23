var Link = React.createClass({
    getInitialState: function(){
      return {
           link: this.props.link,
           isRead: this.props.link.read,
           linkId: this.props.link.id,
           url: this.props.link.url
           }
     },

    updateRead: function(linkId){
        var method = this.state.isRead ? "DELETE" : "POST";
        $.ajax({
          url: '/links/' + linkId + '/read',
          type: method,
          success: function(response) {
                   this.setState({isRead: response.read});
                   }.bind(this)
           });
     },

     readParser: function(){
       if(this.state.isRead){
         return[
           <td><strike><a href={this.state.url}>{this.state.url}</a></strike></td>,
           <td>Yes</td>]
       } else{
         return[
           <td><a href={this.state.url}>{this.state.url}</a></td>,
           <td>No</td>]
       }
    },

     render: function(){
         return (
              <tr id="link">
                  {this.readParser()}
                  <td><MarkRead key={this.state.linkId} linkId={this.state.linkId} initialIsRead={this.state.isRead} updateHandler={this.updateRead} /></td>
              </tr>
              )
      }
});
