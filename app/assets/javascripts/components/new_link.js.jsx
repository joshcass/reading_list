var NewLink = React.createClass({
    getInitialState: function(){
      return {
        link: ''  
        }
    },

    handleChange: function(event){
      this.setState({
        link: event.target.value
      });
    },

    submitHandler: function(){
      this.props.createHandler(this.state.link);
      this.setState({link: ''})
    },

    render: function(){
      return (
        <div className="large-4 columns">
           <h3>Add New Link:</h3>
           Enter URL: <input type="text" value={this.state.link} onChange={this.handleChange} />
           <input type="submit" className="button small" onClick={this.submitHandler} />
        </div>
      )
    }
});