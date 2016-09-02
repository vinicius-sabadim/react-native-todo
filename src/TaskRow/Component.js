import React, { Component } from 'react'
import {
	Text,
	TouchableHighlight,
	View
} from 'react-native'
import styles from './Style'
import Render from './Render'

class TaskRow extends Component {
	onDonePressed() {
		this.props.onDone(this.props.todo)
	}

	render() {
		return Render.bind(this)(styles)
	}
}

TaskRow.propTypes = {
	onDone: React.PropTypes.func.isRequired,
	todo: React.PropTypes.shape({
		task: React.PropTypes.string.isRequired
	}).isRequired
}

export default TaskRow