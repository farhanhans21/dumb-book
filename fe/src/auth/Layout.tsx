import { Box } from '@chakra-ui/react'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
<>
<Box
          display={"flex"}
          maxW={"100%"}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100vh"}
        >
          <Outlet/>
        </Box>
</>
  )
}

export default Layout