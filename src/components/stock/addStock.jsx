import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Modal from "../comman/modal";
import CustomTextField from "../comman/textField";
import DropDown from "../comman/dropDown";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const AddStock = () => {
  const [open, setOpen] = useState(false);
  const [ value, setValue ] = useState("")
  const [ dvalue, dSetvalue] = useState('select')

  function handleSetValue(e){
    setValue(e.target.value)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const currencies = [
    {
      value: 'select',
      label: 'Select'
    },
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return(
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AddOutlinedIcon />
        <Typography >Add Stock</Typography>
      </Button>
      <Modal open={open} isClose={handleClose} title={"Add Stock"}>
        <Box sx={{width: "100%"}}>
          <CustomTextField
            title={"Company Name"}
            value={value}
            setValue={handleSetValue}
            style={{marginTop: "10px", display: "block"}}
          />

          <CustomTextField
            title={"Symbol"}
            value={value}
            setValue={handleSetValue}
            style={{marginTop: "10px", display: "block"}}
          />

          <DropDown
            menu={currencies}
            label={"Industry"}
            value={dvalue}
            setValue = {(e)=>{dSetvalue(e.target.value)}}
          />
        </Box>
      </Modal>
    </>
  )
}

export default AddStock