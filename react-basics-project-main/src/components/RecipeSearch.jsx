export function RecipeSearch() {

  
  const textInput = ({onChange}) => {
    <input className="textInput" type="text" placeholder="Search" onChange={onChange}></input>
  }

  const handleChange = (event) => {
    setSearchField(event.target.value)
  }
  return (
    <>
      <textInput onChange={handleChange} />
    </>
  );
}
