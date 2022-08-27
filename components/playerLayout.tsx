import { Box } from '@chakra-ui/layout';
import Sidebar from './sidebar';

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="50vw">
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
      <Box marginLeft="250px" marginBottom="100px" bg="lightpink">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0" bg="lightblue ">
        Player
      </Box>
    </Box>
  )
}

export default PlayerLayout;