import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		backgroundColor: '#F7F7F7',
		paddingTop: 40,
		flex: 1,
		justifyContent: 'flex-start'
	},
	button: {
		height: 60,
		borderColor: '#05A5D1',
		borderWidth: 2,
		backgroundColor: '#333',
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: '#FAFAFA',
		fontSize: 20,
		fontWeight: '600'
	},
	toggleRow: {
		flexDirection: 'row',
		padding: 10
	},
	toggleText: {
		fontSize: 20,
		paddingLeft: 10,
		paddingTop: 3
	}
})