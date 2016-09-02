import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		borderWidth: 1,
		borderColor: '#E7E7E7',
		padding: 20,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 20, 
		marginLeft: 20,
		marginRight: 20
	},
	label: {
		fontSize: 20,
		fontWeight: '300'
	},
	doneButton: {
		borderRadius: 5,
		padding: 5
	}
})