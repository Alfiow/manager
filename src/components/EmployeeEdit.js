import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications'
import EmployeeForm from './EmployeeForm'; // hati-hati typo
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => { // model employee disini, mengulangi setiap objek 
      this.props.employeeUpdate({ prop, value }); // dan memperbarui reducer dengan setiap properti
    });
  }
  // value itu nilai, prop adalah key. each adalah setiap props name, phone, shift

  onButtonPress() {
    const { name, phone, shift } = this.props;

    // console.log(name, phone, shift); // untuk cek ketika Save changes
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    // employee props di atas didapatkan ketika kita klik untuk edit nama/employee, maka
    // employee yang ada di ListItem akan dilempar menjadi props
  } 

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `your upcoming shift on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={ () => this.setState({ showModal: !this.state.showModal }) }>
            Fire Employee  
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this ?
        </Confirm>

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { 
  employeeUpdate, 
  employeeSave,
  employeeDelete
}) (EmployeeEdit);