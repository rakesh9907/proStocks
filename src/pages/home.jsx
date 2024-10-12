import { Box } from "@mui/material"
import AddStock from "../components/stock/addStock"
import AddSector from "../components/stock/addSector"
import AddIndustry from "../components/stock/addIndustry"


const Home = () => {
  return(
    <Box sx={{ margin: "10px 5px"}}>
      <Box sx={{display: "flex", margin: "10px", cursor: "pointer"}}>
        <Box sx={{margin: "10px"}}>
          <AddSector />
        </Box>
        <Box sx={{margin: "10px"}}>
          <AddIndustry />
        </Box>
        <Box sx={{margin: "10px"}}>
          <AddStock />
        </Box>
      </Box>
    </Box>
  )
}

export default Home