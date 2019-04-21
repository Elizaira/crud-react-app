import React, { Component } from 'react';
import axios from 'axios'; 
// import DeleteEmployee from './components/DeleteEmployee';


import '../App.css';


class AllEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [] };
  }
  
  componentDidMount() {
    try {
      axios({
        method: 'get',
        url: 'http://dummy.restapiexample.com/api/v1/employees'
      }).then(response => {
        console.log(response.data);
        this.setState({employees: response.data});
      });
    } catch (err) {
      console.log('Fetching all employee details');
      console.log(err);
    }
  }
  
  render() {
      return (
      <div className="container">
        <div className="modal-content">
          <div className="modal-header">
            Employee Details
          </div>
          <div className="modal-body">
          <table id="table-content">
            <tbody>
            <tr>
                <th>Employee Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>

            {
              this.state.employees.map(employees => (
                
              <tr key={employees.id}>
              
                <td>{employees.employee_name}</td>
                <td>{employees.employee_age}</td>
                <td>{employees.employee_salary}</td>
                <td>
                  <button className="btn-view"><i className="fa fa-user"></i></button>
                  <button className="btn-add"><i className="fa fa-plus"></i></button>
                  <button className="btn-delete"><i className="fa fa-trash"></i></button>
                </td>
              </tr>

            ))}

            </tbody>
          </table>
          </div>
          
        </div>  
      </div>
       
      );
  }
}

export default AllEmployee;