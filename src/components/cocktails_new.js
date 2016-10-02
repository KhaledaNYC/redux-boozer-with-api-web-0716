import React from 'react'
import * as actions from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class CocktailNew extends React.Component {


  newCocktailHandler(event) {
    event.preventDefault()
    const newCocktail = {
      name: this.refs.name.value,
      description: this.refs.description.value,
      instructions: this.refs.instructions.value
    }
      this.props.actions.createCocktail(newCocktail)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.newCocktailHandler.bind(this)}>
          <label>name: </label>
          <input ref='name' /><br></br>
          <label>description: </label>
          <input ref='description' /><br></br>
          <label>instructions: </label>
          <input ref='instructions' /><br></br>
          <input type="submit" value="🍹🍸🍹🍸"/>
        </form>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

const componentCreator = connect(null, mapDispatchToProps)
export default componentCreator(CocktailNew);
