import TextField from '@mui/material/TextField';

const CustomTextField = ({error, title, errorLabel, value, setValue, style}) => {
  return(
    <>
      <TextField
        error = {error}
        id="outlined-error-helper-text"
        label={title}
        value={value}
        onChange={setValue}
        helperText={errorLabel}
        sx={{...style, minWidth: "500px"}}
        fullWidth
      />
    </>
  )
}

export default CustomTextField;