import PropTypes from 'prop-types'
import Button from './Button'


const header = () => {
  return (
    <header className="Header">
        <h1> Task Tracker</h1>
        <Button color = 'green' text='Add' />
    </header>
  )
}

export default header