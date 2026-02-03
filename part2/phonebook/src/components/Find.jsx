const Find = ({filter, handler}) => {
    return (
        <div>
          Filter shown with: 
          <input 
            value={filter}
            onChange={handler}
          />
        </div>
    )
}

export default Find

