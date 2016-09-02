import React from 'react'
import {
	Animated,
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native'

export default function render(styles) {
	const doneAnimation = new Animated.ValueXY()
	const localStyle = StyleSheet.create({
		row: {
			transform: doneAnimation.getTranslateTransform()
		}
	})

	function animatedPress() {
		Animated.spring(doneAnimation, {
			tension: 2,
			friction: 3,
			toValue: {
				x: -500,
				y: 0
			}
		}).start()

		setTimeout(() => {
			this.onDonePressed()
		}, 1000)
	}

	return (
		<Animated.View style={[ styles.container, localStyle.row ]}>
			<Text style={ styles.label }>{ this.props.todo.task }</Text>
			<TouchableHighlight
				onPress={ animatedPress.bind(this) }
				style={ styles.doneButton }
				underlayColor='#DDD'
			>
				<Image
					source={ require('../../images/done.png') }
				/>
			</TouchableHighlight>
		</Animated.View>
	)
}