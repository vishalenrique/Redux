import React from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import { selectUser } from '../actions/index';

class UserList extends React.Component{

    createListItem(){
        return(
            this.props.users.map( (user) =>{
                return (
                    <li 
                    key={user.id}
                    onClick={()=>this.props.selectUser(user)}
                    >
                    {user.first} {user.last}
                    </li>
                );
            })
        );
    }
    render(){
        return(
            <ul>
               {this.createListItem()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
      users:state.users
    };
  }

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectUser:selectUser},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);
