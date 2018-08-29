import React from 'react';
import style from './file.css';
import UserList from './../container/user-list';
import UserDetail from './../container/user-details';

class App extends React.Component{
  render(){
    return(
      <div>
      <h2>User lists:</h2>
      <UserList/>
      <hr/>
      <h2>User details:</h2>
      <UserDetail/>
    </div>
    );
  }
}

export default App
