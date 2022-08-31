import { TextField, Button } from "@mui/material"

function Search() {
  return (
    <main class="">
      <div class="">
        <form class="" action="">
          <TextField variant="outlined" label="Type a title, a director..." />
          <Button type="submit" variant="contained">Search</Button>
        </form>
        <div class="">Or...</div>
        <button class="">Surprise me!</button>
      </div>
    </main>
  )
}

export default Search
