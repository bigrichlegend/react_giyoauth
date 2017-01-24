import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile';
import Search from './github/Search';

class MyApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName: 'bigrichlegend',
            userData: [],
            userRepos: [],
            perPage: 15
        };
    }
//Get user data on github
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

/*Get user REPOS*/ 
getUserRepos(){
    $.ajax({
        url: 'https://api.github.com/users/'+ this.state.userName + '/repos?per_page='+ this.state.perPage +'&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret +'&sort=created',
        dataType: 'json',
        cache: false,
        success: function(data){
            this.setState({userRepos: data});
            console.log(data);
        }.bind(this),
        error: function(xhr, status, err){
            this.setState({userName: null});
            alert(err);
        }.bind(this) 
    });
}

handleFormSubmit(username){
    this.setState(
            { userName: username},
            function () {
                this.getUserData();
                this.getUserRepos();
            }
        );
}

componentDidMount(){
    this.getUserData();
    this.getUserRepos();
}
    render(){
        return(
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                {/* <Profile userData = {this.state.userData}/> */}
                <Profile { ...this.state} />
            </div>
        )
    };
}

MyApp.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

MyApp.defaultProps = {
    clientId:'4b6d5b23c4920b52e7e6',
    clientSecret: '84f683104e6df6c339efdc4e2d9bb339d9157596'
}

export default MyApp;