import React, { Component } from 'react';
import axios from 'axios'; 
class UpdateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }
  UpdateEmployee(id, data) {
        try {
          axios({
            method: 'put',
            url: `http://dummy.restapiexample.com/api/v1/update/${id}`,
            data: data
          }).then(response => {
            console.log('Updated Employee Data');
            console.log(response.data);
          });
        } catch (err) {
          console.log('Error on updating selected employee data');
          console.log(err);
        }
      }
  render() {
      var data ={
          name:'helloworld',
          age:'5',
          salary:'1000'
      };
      return(
          <div className='App'>
            <button onClick={() =>{
                this.UpdateEmployee('id',data);
            }}>
            Click me
            </button>
          </div>
      );
  }
}
export default UpdateEmployee;