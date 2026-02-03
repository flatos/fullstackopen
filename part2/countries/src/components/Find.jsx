const Find = ({filter, handler}) => {
    return (
        <div>
          Find countries: 
          <input 
            value={filter}
            onChange={handler}
          />
        </div>
    )
}

export default Find

