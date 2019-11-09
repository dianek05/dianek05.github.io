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
                <input className='input' ref={(data) => {this._inputName = data}} ></input>
                <button className='btnAdd'>Dodaj</button>
            </form>
        )
    }
}

export default UsersForm;