import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ 
  type: types.ADD_TODO, 
  text 
})

export const deleteTodo = id => ({ 
  type: types.DELETE_TODO, 
  id 
})

export const editTodo = (id, text) => ({
 type: types.EDIT_TODO, 
 id, 
 text 
})

export const completeTodo = id => ({ 
  type: types.COMPLETE_TODO, 
  id 
})

export const completeAll = () => ({ 
  type: types.COMPLETE_ALL 
})

export const clearCompleted = () => ({ 
  type: types.CLEAR_COMPLETED 
})

//获取新闻list页
export const fetchTodoList = () => {
  return (dispatch) => {
    return fetch(`https://www.reddit.com/r/reactjs.json`)
      .then(res => res.json())
      .then(res_json => {
        let todoList = []
        let res = res_json.data.children
        res.map((item, index) => {
          dispatch(addTodo(item.data.title));
        })
      })
    }
}