import React, {
	Component
} from 'react'
import {
	Navigator
} from 'react-native'

import TaskList from './TaskList/Component'
import TaskForm from './TaskForm/Component'
import store from './Store'

class Main extends Component {
	constructor() {
		super()
		this.state = store.getState()

		store.subscribe(() => {
			this.setState(store.getState())
		})
	}

	onAddStarted() {
		this.nav.push({
			name: 'taskform'
		})
	}

	onCancel() {
		this.nav.pop()
	}

	onAdd(task) {
		store.dispatch({
			type: 'ADD_TODO',
			task
		})
		this.nav.pop()
	}

	onDone(todo) {
		store.dispatch({
			type: 'DONE_TODO',
			todo
		})
	}

	onToggle() {
		store.dispatch({
			type: 'TOGGLE_STATE'
		})	
	}

	renderScene(route, nav) {
		switch(route.name) {
		case 'taskform':
			return (
				<TaskForm
					onCancel={ this.onCancel.bind(this) }
					onAdd={ this.onAdd.bind(this) }
				/>
			)
		default:
			return (
				<TaskList
					filter={ this.state.filter }
					onAddStarted={ this.onAddStarted.bind(this) }
					onDone={ this.onDone.bind(this) }
					onToggle={ this.onToggle.bind(this) }
					todos={ this.state.todos }
				/>
			)
		}
	}

	configureScene() {
		return Navigator.SceneConfigs.FloatFromBottom
	}

	render() {
		return (
			<Navigator
				configureScene={ this.configureScene }
				initialRoute={ { name: 'tasklist', index: 0 } }
				ref={ (nav) => {
					this.nav = nav
				} }
				renderScene={ this.renderScene.bind(this) }
			/>
		)
	}
}

export default Main