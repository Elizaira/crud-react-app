import React, { Component } from 'react';
import axios from 'axios'; 



class DeleteEmployee extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    const {onDelete, employees} = this.props;
    onDelete(this.props.employees) 
  }
 

  DeleteEmployee(id) {
    
    try {
      axios.delete('http://dummy.restapiexample.com/api/v1/delete/{this.state.id}')
      .then(response => {
        console.log('Deleting Employee')
        console.log(response.data);

      });
    } catch (err) {
      console.log('Error on delete employee details');
      console.log(err);
    }
  }

  render() {
    const{employee_name, onDelete, employee_age, employee_salary} = this.props;
    
      return (
       <div className="container">
        <table>
          <tbody>

          
            <tr>
              <td>{employee_name}</td>
              <td>{employee_age}</td>
              <td>{employee_salary}</td>
              <td>
                <button onClick={this.onDelete}>Delete</button>
              </td>
            </tr>

          </tbody>
        </table>





        {/* <button onClick={() =>{
          this.DeleteEmployee('1342');
        } }></button> */}
       </div>
      );
  }
}

export default DeleteEmployee;