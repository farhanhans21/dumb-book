import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/userComponents/navigation/Navigation";

function LayoutUser() {
  return (
    <Box display={"flex"} flexDirection={"column"} width={"100vw"}>
      <Navigation />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default LayoutUser;
