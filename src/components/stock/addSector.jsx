import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Modal from "../comman/modal";
import CustomTextField from "../comman/textField";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const AddSector = () => {
  const [open, setOpen] = useState(false);
  const [ value, setValue ] = useState("")

  function handleSetValue(e){
    setValue(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return(
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddOutlinedIcon />
        <Typography >Add Sector</Typography>
      </Button>
      <Modal open={open} isClose={handleClose} title={"Add Sector"}>
        <Box sx={{width: "100%"}}>
          <CustomTextField
            title={"Sector Name"}
            value={value}
            setValue={handleSetValue}
            style={{marginTop: "10px", display: "block"}}
          />
        </Box>
      </Modal>
    </>
  )
}

export default AddSector