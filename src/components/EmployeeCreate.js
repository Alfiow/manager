import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress(){
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' }); // untuk default shift
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} // mengambil semua props berbeda yang dipunyai EmployeeCreate dan meneruskannya ke EmployeeForm juga
        />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create  
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { 
  employeeUpdate, employeeCreate
})(EmployeeCreate);