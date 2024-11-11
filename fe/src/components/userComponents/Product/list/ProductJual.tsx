import { Box, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'

function ProductJual() {
  
  const data = [
    {
      id: 1,
      name: "Sebuah Seni Untuk Bersikap Bodoh Amat",
      author: "Mark mason",
      img: "https://s3-alpha-sig.figma.com/img/7f9b/aa2c/543f2f91420672eb66e8ac40f246c24b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bRX3rLex4CLPimfgbG47WLB8zrDJ5LA9vwjuwBLgOF20ScjJDCUrIvMKDMcxqDsbmV1xGVIHDFiNfzahhoWrKM-ZON2dz3WTG0OKwVCvsap-P0zQE0tH6QBNXILUT~eM6YHli0J10lwfkWGNU6ViWzEgu8gaOeV25IBXvoCrGYrcvcQuWfXhTDRkK8kbR9Umhm5bxxwzvYMSllxfQ8CZPBjSQkR5vaDSlPdp5SYNzD90Mggzl7bN0BfxsweF7z-PvFEPig5tuTLVIzNpw4TL--nONe-CgwF9-zDjAeKvjfzz9cDrqWJ6r-yOTw3ED4~YkSzQisGmj-ykrfndjH0B-w__",
      desc: "sebuah karya dari Mark Mason dalam menciptakan karya yang menjadikan relita yang bagus",
      price: 100000,
    },
    {
      id: 2,
      name: "Warm Hear",
      author: "Valerie Patkar",
      img: "https://s3-alpha-sig.figma.com/img/38cd/302a/ff67f2867a84a90a389f557e32a01780?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QA2oJt2SIA9yT5TGy~kBk07usePGGsnUy55OWUAtMsSZ3-f~kSKAd8VKSB6Etjuqvn792AXEwOwYY64VHGdmH~P~mECzFK-IlgSVdZOO0ibUteomxozbxhijbQphx98fDZEDjuBawbo3X0lXOLInmF9mm86heRBnxewz3uam6RtjADOqEyCEmhh4lkoXuXdMi49ILW-2sCbda7GgulqFc1V5CiQpx3U0jgEkprzBubh9xNmDEZSYZjXS~tkqU4eV4NosUJHrFQ67J84YfiUbWr1qdfC2ski5mcpzD0soDKBcDI63-pdXUQgbRkeGJtRAToV7pEwqINAIBYQdxHBayw__",
      desc: "sebuah karya dari Mark Valerie Patkar dalam menciptakan karya yang menjadikan relita yang bagus",
      price: 200000,
    },
    {
      id: 3,
      name: "Boys do wee love",
      author: "kansa airlangga",
      img: "https://s3-alpha-sig.figma.com/img/875f/4e43/f9c282d15af16852a11bde1b1891858a?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UUtPHqHrtUivOtpA9DZdn6kTKEBMxhyHkwx9PD8mmPomQizW~gzJB0j6VMD98BBd-QwNc~Tx99iDUn3LXY~7G3ErweBszUA-Z0XXfTsXeoJ5sm6BMlxI2x-E8hG3OJtjJRBhyy5QPAOXq2IWm17FZ0GR0LjisCsXyWDW1FKF-OqrnAhO8DrpJMvqKantKCxodeKoP1svXZKYQGy4UIEkxgJoMv6LzUYMtFQX5lp92W37NK1y0DT9YR7xKmUrgWEJq9ywjWmTXMpqqNkeVxk1Dt9w9UbFxuklw0oAzni0uQbCHsi8bhiV2~IQ2L81F-YZzTerUlBQuRiOH7qRkEObTA__",
      desc: "sebuah karya dari kansa airlangga dalam menciptakan karya yang menjadikan relita yang bagus",
      price: 200000,
    },
    
  ];
  return (
    
   
      
        <Box display={"flex"} flexDir={"row"} mt={5}>
          {data.map((e) => (
            <Box display={"flex"} overflowX={"auto"}>
              
              <HStack>
                <Image  w={"200px"} h={"200px"} src={e.img} />
                <VStack align={"stretch"} p={2}>
                  <Text fontWeight={"bold"}>{e.name}</Text>
                  <Text fontWeight={"light"}>{e.author}</Text>
                  <Text color={"green"} fontWeight={"medium"}>
                    {e.price}
                  </Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </Box>
      );
    
  
}

export default ProductJual