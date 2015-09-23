var LinksList = React.createClass({
  getInitialState: function(){
     return {
       links: this.props.links
           }
       },

   linkComponents: function(){
      this.sortLinks();
      return this.state.links.map(function(link){
        return(
            <Link link={link} key={"link-" + link.id} />
            )
       });
    },

   sortLinks: function(){
       this.state.links.sort(function(a, b){
         if(a.read < b.read) return -1;
         if(a.read > b.read) return 1;
         return 0;
       });
    },
  
    render: function(){
       return(
          <div className="large-8 columns">
            <h3>Your Links:</h3>
            <table className="links">
              <thead>
                <tr>
                  <th>Link</th>
                  <th>Read</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.linkComponents()}
              </tbody>
            </table>
          </div>
            )
     }
});
