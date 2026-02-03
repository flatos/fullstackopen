const Notification = ({ message }) => {
const notifyStyle = {
    color: 'green',
    fontStyle: 'italic'
  }
const errorStyle = {
    color: 'red',
    fontStyle: 'italic'
  }

  if (message === null) {
    return null
  }
  let style = notifyStyle
  message.toLowerCase().startsWith('error') ? style = errorStyle : style = notifyStyle

  return (
    <div style={style}>
      {message}
    </div>
  )
}

export default Notification

