import { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TabNavigator } from 'react-navigation'


export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MainNavigator />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
