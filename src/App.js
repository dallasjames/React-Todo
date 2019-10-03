import React from "react";
import Item from "./components/TodoComponents/Todo";
import ItemForm from "./components/TodoComponents/TodoForm";
import data from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: data
    }
  }
  toggleItem = (event, itemId) => {
    event.preventDefault()

    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
    })
  }

  clearDone = event => {
    event.preventDefault()

    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.done
      })
    })
  }

  addItem = (event, itemName) => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      done: false
    }

    this.setState({
      todos: [newItem, ...this.state.todos]
    })
  }

  render() {
    return (
      <div>
        <div>
          <h1>To Do List</h1>
          <ItemForm addItem={this.addItem} />
        </div>

        <div>
          {this.state.todos.map(item => (
            <Item
              key={item.id}
              item={item}
              onClick={(e) => this.toggleItem(e, item.id)}
            />
          ))}

          <button onClick={this.clearDone}>
            Clear Completed Items
          </button>
        </div>
      </div>
    );
  }
}

export default App