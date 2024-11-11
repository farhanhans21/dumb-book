import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import ListProduct from "../list/listProdut";
import ProductJual from "../list/ProductJual";

function Home() {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          fontSize={'4xl'}
          fontWeight={'bold'}
          flexDir={"column"}
        >
          <Text>With us, you can shop online & help</Text>
          <Text>save your high street at the same time</Text>
        </Box>
        <Box mx={2}>
        <ListProduct/>
        </Box>
        <Box mt={12} mx={7}>
          <Box display={"flex"} justifyContent={'flex-start'} flexDir={"column"}>    
          <Heading>ListProduct</Heading>
          <ProductJual/>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
