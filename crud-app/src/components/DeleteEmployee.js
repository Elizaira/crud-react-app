import React, { Component } from 'react';
import axios from 'axios'; 



class DeleteEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }

 

  DeleteEmployee(id) {
  
    try {
      axios({
        method: 'delete',
        url: `http://dummy.restapiexample.com/api/v1/delete/${id}`
      
      }).then(response => {
        console.log('Deleting Employee')
        console.log(response.data);

      });
    } catch (err) {
      console.log('Error on delete employee details');
      console.log(err);
    }
  }

  render() {
    const{employee_name, employee_age, employee_salary} = this.props;
    
      return (
       <div className="container">
        {/* <table>
          <tbody>

          
            <tr>
              <td>{employees.employee_name}</td>
              <td>{employees.employee_age}</td>
              <td>{employees.employee_salary}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>

          </tbody>
        </table> */}





        <button onClick={() =>{
          this.DeleteEmployee('1342');
        } }></button>
       </div>
      );
  }
}

export default DeleteEmployee;