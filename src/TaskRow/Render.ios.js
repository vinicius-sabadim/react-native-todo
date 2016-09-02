import React from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native'

import Swipeout from 'react-native-swipeout'

const localStyle = StyleSheet.create({
	row: {
		marginBottom: 0, 
		marginLeft: 0,
		marginRight: 0
	},
	container: {
		marginBottom: 20
	}
})

export default function render(styles) {
	const buttons = [
		{
			text: 'Done',
			backgroundColor: '#05A5D1',
			underlayColor: '#273539',
			onPress: this.onDonePressed.bind(this)
		}
	]

	return (
		<View style={ localStyle.container }>
			<Swipeout
				backgroundColor='#FFF'
				right={ buttons }
			>
				<View style={[ styles.container, localStyle.row ]}>
					<Text style={ styles.label }>{ this.props.todo.task }</Text>
				</View>
			</Swipeout>
		</View>
	)
}