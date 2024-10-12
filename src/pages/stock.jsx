import { Box } from "@mui/material"
import StockList from "../components/stock/stockList"

const Stocks = () => {
  return(
    <>
      <Box sx={{display: "flex"}}>
        <Box>
          <Box sx={{ width: "222px", height: "433px", overflow: "auto", margin: '10px'}}>
            <StockList />
          </Box>
        </Box>
        <Box>
        </Box>
      </Box>
    </>
  )
}

export default Stocks