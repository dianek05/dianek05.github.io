import React, {Component} from 'react';

class UsersForm extends Component {
    constructor(props){
        super(props);
    }    

    handleSubmit = (event) => {
        event.preventDefault(); 
        this.props.addUser(this._inputName.value);   
        
        this._inputName.value = "";
        
        if(this._inputName.value.length < 1){
            this.setState = () => ({
                
            })
        }
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" className='input' ref={(data) => {this._inputName = data}} ></input>
                <button type="submit" className='btnAdd'>Add user</button>
            </form>
        )
    }
}

export default UsersForm;