var React = require('react');
var ReactDOM = require('react-dom');
var USER_DATA = {
	name: 'Henry',
	username: 'helios2905',
	image: 'https://avatars0.githubusercontent.com/u/5765634?v=3&s=460'
} 
	
var ProfilePic = React.createClass({
	render: function() {
		return <img src={this.props.imageUrl} style={{height:100,width:100}} />
		
	}
	
});
	
var ProfileLink = React.createClass({
	render: function() {
		return (
		 <div>
		 	<a href={'https://www.github.com/' + this.props.username} >
		 		{this.props.username}
		 	</a>
		 </div>
		)
	}
	
});

var ProfileName = React.createClass({
	render: function() {
		return (
		 <div>Hi {this.props.name}</div>
		)
	}
});
	
var Hello = React.createClass({
  render: function () {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
			<ProfilePic imageUrl={this.props.user.image} /> 
			<ProfileName name={this.props.user.name} />
			<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
});


//ReactDOM.render(<Hello name="Henry"/>, document.getElementById('app'));
ReactDOM.render(<Avatar user={USER_DATA}/>, document.getElementById('app'));
