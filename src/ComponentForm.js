import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { RkButton, RkPicker } from 'react-native-ui-kitten';
import Validator from 'validatorjs';
import lang from 'validatorjs/src/lang';
import en from 'validatorjs/src/lang/en';
lang._set('en', en);

import { LkTextInput, LkPicker, LkRadioButton, LkCheckbox } from '../lib';

const validate = values => {
  const rules = {
    name: 'required',
    language: 'required',
    gender: 'required'
  };

  const validator = new Validator(values, rules);
  if(validator.fails()){
    return validator.errors.all();
  }
}

class ComponentFrom extends Component {

  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.content}>
            <Field name="name" component={LkTextInput} label="Name" placeholder="Input name here." />
            <Field
              name="language"
              component={LkPicker}
              label="Select Language"
              items={[
                {label: 'Php', value: 'php'},
                {label: 'Javascript', value: 'js'},
                {label: 'Java', value: 'java'},
                {label: 'C', value: 'c'},
                {label: 'Golang', value: 'golang'},
                {label: 'Python', value: 'python'}
              ]}
            />
            <Field
              name="gender"
              component={LkRadioButton}
              label="Choose Gender"
              items={[
                {label: 'Male', value: 'male'},
                {label: 'Female', value: 'female'},
                {label: 'Other', value: 'other'}
              ]}
            />
            <Field
              name="hobies"
              component={LkCheckbox}
              label="Choose Hobies"
              items={[
                {label: 'Football', value: 'football'},
                {label: 'Batminton', value: 'batminton'},
                {label: 'Swimming', value: 'swimming'}
              ]}
            />
            <RkButton style={styles.button} onPress={handleSubmit} rkType='outline stretch'>Button</RkButton>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const ContainerComponentFrom = reduxForm({
  form: 'example',
  validate
})(ComponentFrom)

export default ContainerComponentFrom;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 10
  },
  button: {
    marginTop: 20
  }
})