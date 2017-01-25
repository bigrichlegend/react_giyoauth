import React, { Component } from 'react';
import Auth0Lock from 'auth0-lock';


class HeaderComponent extends Component {
    constructor() {
      super();
      this.defaultValues = {
        myClientId: 'izr8e64XiiG61MzN6135kRfvmkSbgL8z',
        myDomain: 'lordbic.eu.auth0.com'
      }
  }
  //myClientId: 'ob3D0GM0Rwj9toWCQj73IPjrndJPtF3D',

  componentWillMount() {
    this.lock = new Auth0Lock(this.defaultValues.myClientId, this.defaultValues.myDomain);
    //On authentication
    this.lock.on('authenticated', (authResult) => {
      //console.log(authResult);
      this.lock.getProfile(authResult.idToken, (error, profile) =>{
        if(error){
          console.log(error);
          return;
        }
        console.log(profile);
      });
    });
  }
  showLock() {
    this.lock.show();
  }

  onLoginClick() {
    //Because we want to send it to the parent function we have to use
    //a property
    //console.log('You clicked meeaa!');
    this.showLock();
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src="images/Logo_Idee.png" alt="" /></a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a onClick={this.onLoginClick.bind(this)} href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  };
}


export default HeaderComponent;




