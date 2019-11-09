import React, {Component} from 'react';

class UsersForm extends Component {
    constructor(props){
        super(props);
    }    

    handleSubmit = (event) => {
        event.preventDefault(); 


        this.props.addUser(this._inputFirstName.value, this._inputLastName.value); 
        
        this._inputFirstName.value = "";
        this._inputLastName.value = "";
        
        if(this._inputFirstName.value.length < 1){
            this.setState = () => ({
                
            })
        
        }
        if(this._inputLastName.value.length < 1){
            this.setState = () => ({
                
            })
        
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="First Name" className='input' ref={(data) => {this._inputFirstName = data}} ></input>&nbsp;
                <input type="text" placeholder="Last Name" className='input' ref={(data) => {this._inputLastName = data}} ></input>
                <button type="submit" className='btnAdd'>Add user</button>
            </form>
        )
    }
}

export default UsersForm;