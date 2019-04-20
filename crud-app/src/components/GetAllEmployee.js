import React, { Component } from 'react';
import axios from 'axios'; 




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
        <table>
          {this.state.employees.map(employees => (
            <tr key={employees.id}>
              <td>{employees.employee_name}</td>
              <td>{employees.employee_salary}</td>
              <td>{employees.employee_age}</td>
            </tr>
          ))}
        </table>
       </div>
      );
  }
}

export default AllEmployee;