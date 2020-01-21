import PropTypes from 'prop-types'
import React from 'react'

export default class User extends React.Component {
  render() {
    const { name, handleLogin, isFetching, error } = this.props

    return (
      <div className="user ib">
        {error ? 'Ошибка загрузки' : null}
        {isFetching ? 'Загрузка.....' : <p> Привет, {name}!</p>}
        <button onClick={handleLogin}>Вход</button>
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  eror: PropTypes.string,
}
