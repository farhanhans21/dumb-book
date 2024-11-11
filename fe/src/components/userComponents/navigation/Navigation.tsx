import { Avatar, Box, flexbox, Image, Text } from "@chakra-ui/react";
import { ButtonLink } from "../../../ui/ButtonLink";
import logo from "../../../assets/logoBook.svg";
import cart from "../../../assets/cart.svg";
import { useAppSelector } from "../../../store/store";
function Navigation() {
  // const user = useAppSelector((state) => state.auth.entities);
  
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      h={"14vh"}
      width={"100vw"}
    >
      <ButtonLink to={"home"} w={"50%"} display={"flex"} ml={8} alignItems={"center"}>
        <Image boxSize="120px" src={logo} alt="Logo" />
      </ButtonLink>
      <Box
        display={"flex"}
        justifyContent={"flex-end"}
        w={"20%"}
        alignItems={"center"}
      >
      
        
        <ButtonLink
          color={"white"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/cart"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Image src={cart} w={"2vw"} />
        </ButtonLink>
        <ButtonLink
          color={"white"}
          fontWeight={"medium"}
          _hover={{ color: "white" }}
          to={"/profile"}
          w={"50%"}
          display={"flex"}
          variant="link"
          justifyContent={"center"}
          alignItems={"center"}
          h={"30px"}
        >
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </ButtonLink>
      </Box>
    </Box>
  );
}

export default Navigation;
