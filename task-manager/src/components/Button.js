import { click } from "@testing-library/user-event/dist/click"

const Button = ({color, text}) => {
    const onClick = () => {
        console.log('click')
    }

  return (
  <button style={{backgroundColor: color}}
  onClick={onClick}
  className='btn'>{text}</button>
  )
}

export default Button
