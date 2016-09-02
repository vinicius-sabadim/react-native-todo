import React, {
  Component
} from 'react'
import {
  AppRegistry
} from 'react-native'
import Main from './src/Main'

class AwesomeProject extends Component {
  render() {
    return (
      <Main />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)