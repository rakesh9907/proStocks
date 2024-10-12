import { ListItem, ListItemButton, ListItemText } from "@mui/material"

const StockList = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, ,12,3,2,2,2,2,2,2,2,2,,2,2,2,2,,22,2,2,2,2,,22,2,2,7,2,2,2,8,2,2,9,2]
  return(
    <>
      {
        num.map((item, index) => (
          <ListItem key={index} component="div" disablePadding>
            <ListItemButton>
              <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
          </ListItem>
        ))
      }
    </>
  )
}

export default StockList