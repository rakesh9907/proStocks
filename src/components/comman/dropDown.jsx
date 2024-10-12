import { Box, MenuItem, TextField } from "@mui/material"

const DropDown = ({menu, label, value, setValue, error, errorMassage}) => {
  return(
    <>
      <Box sx={{marginTop: "10px"}}>
        <TextField
          id="standard-select-currency"
          select
          error={error}
          label={label}
          value={value}
          onChange={setValue}
          helperText={errorMassage}
          fullWidth
        >
          {menu.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  )
}

export default DropDown