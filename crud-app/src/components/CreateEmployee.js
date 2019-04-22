import React, { Component } from 'react';
import axios from 'axios'; 

// import modal from 'modal';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    onSubmit(event){
        event.preventDefault();

        this.props.onAdd(this.nameInput.value, this.ageInput.value, this.salaryInput.value);

        //clear fields in the input
        this.nameInput.value='';
        this.ageInput.value='';
        this.salaryInput.value='';
    }

    CreateEmployee(data){
        try {
            axios({
            method: 'post',
            url: 'http://dummy.restapiexample.com/api/v1/create',
            data: data
            }).then(response => {
            console.log('Adding Employee Data');
            console.log(response.data);
            });
        } catch (err) {
            console.log('Error on adding selected employee data');
            console.log(err);
        }
    }
    render() {  

        return (
        <form onSubmit={this.onSubmit}>
             <div className="container">
            <input type="text" placeholder="Name" className="input-box" ref={nameInput => this.nameInput = nameInput} />
            <input type="number" placeholder="Age" className="input-box"ref={ageInput => this.ageInput = ageInput} />
            <input type="number" placeholder="Salary" className="input-box" ref={salaryInput => this.salaryInput = salaryInput} />
           
           
            <button className="btn-add" id="btn-add">
                 Add
            </button>
            
        </div>
        </form>
       
        );      
    }
}

export default CreateEmployee;