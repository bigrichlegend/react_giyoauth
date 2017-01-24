import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyProfile extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: 'Richard',
            userData: [],
            userRepos: [],
            perPage: 5
        };
    }
getUserData(){
    $.ajax({
        url: 'https://api.github.com/users/'+ this.state.userName + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
        dataType: 'json',
        cache: false,
        success: function(data){
            this.setState({userData: data});
            console.log(data);
        }.bind(this),
        error: function(xhr, status, err){
            this.setState({userName: null});
            alert(err);
        }.bind(this) 
    });
}

componentDidMount(){
    this.getUserData();
}
    render(){
        return(
            <div>
                <h1>Richard's New APP</h1>
                <p>{this.state.userName}</p>
                <p>{this.props.clientSecret}</p>
            </div>
        )
    };
}

MyProfile.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

MyProfile.defaultProps = {
    clientId:'4b6d5b23c4920b52e7e6',
    clientSecret: '84f683104e6df6c339efdc4e2d9bb339d9157596'
}

export default MyProfile;