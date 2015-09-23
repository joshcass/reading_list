var LinkPage = React.createClass({
    getInitialState: function(){
       return {
         links: this.props.links
       }
     },

     createLink: function(link){
       var data = this.linkObject(link)
       $.ajax({
          url: '/links',
          type: 'POST',
          data: data,
          success: function(response){
           var updatedLinks = this.state.links.push(response)
             this.setState({links: updatedLinks})
             }.bind(this)
       });
     },

     linkObject: function(link){
        return {link: {url: link}}
     },

     render: function(){
       return(
       <div>
         <NewLink createHandler={this.createLink}/>
         <LinksList links={this.state.links} />
        </div>
       )
     }
});