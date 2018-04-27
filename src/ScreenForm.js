import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import ComponentForm from './ComponentForm';

class ScreenForm extends Component {

  handleSubmit = (values) => {
    alert(JSON.stringify(values))
  }

  render() {
    return (
      <View style={styles.container}>
        <ComponentForm {...this.props} onSubmit={this.handleSubmit} />
      </View>
    )
  }
}

export default connect()(ScreenForm)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
})