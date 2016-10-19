import React from 'react'
// import * as types from ''
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../constants/ActionTypes'
import TodoItem from './TodoItem'
import Footer from './Footer'

// import { fetchTodoList } from '../actions'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: SHOW_ALL
    };
  }

  componentDidMount = () => {
    this.props.actions.fetchTodoList()
  }

  showFiltered = (filterState) => {
    this.setState({
      filter: filterState
    })
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state
    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    console.log('filteredTodos', filteredTodos)
    return (
      <div>
        <ul className="panel-body">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </ul>
        <Footer {...actions} filter={filter} showFiltered={this.showFiltered}/>
      </div>
    )
  }
}