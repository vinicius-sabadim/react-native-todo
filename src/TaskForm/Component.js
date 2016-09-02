import React, { Component } from 'react'
import {
	Text,
	TextInput,
	TouchableHighlight,
	View
} from 'react-native'
import styles from './Style'

class TaskForm extends Component {
	constructor(props, context) {
		super(props, context)
	}

	onChange(text) {
		this.task = text
	}

	onAddPressed() {
		this.props.onAdd(this.task)
	}

	render() {
		return (
			<View style={ styles.container }>
				<TextInput
					onChangeText={ this.onChange.bind(this) }
					style={ styles.input }
				/>

				<TouchableHighlight
					onPress={ this.onAddPressed.bind(this) }
					style={ styles.button }
				>
					<Text style={ styles.buttonText }>
						Add
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					onPress={ this.props.onCancel }
					style={[ styles.button, styles.cancelButton ]}
				>
					<Text style={ styles.buttonText }>
						Cancel
					</Text>
				</TouchableHighlight>
			</View>
		)
	}
}

TaskForm.propTypes = {
	onCancel: React.PropTypes.func.isRequired,
	onAdd: React.PropTypes.func.isRequired
}

export default TaskForm