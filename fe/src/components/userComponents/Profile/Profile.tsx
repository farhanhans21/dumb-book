import { Avatar, Box, Button, ButtonGroup, Card, CardBody, CardFooter, Container, Divider, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import location from "../../../assets/location.svg";
import mail from "../../../assets/mail.svg";
import phone from "../../../assets/phone.svg";
import sex from "../../../assets/sex.svg";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { useEffect } from "react";
import { getProfileAsync } from "./hooks/async";
function Profile() {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile)
  
  useEffect(() => {
    dispatch(getProfileAsync())
  },[dispatch])

  return (<>
    <Box display={"flex"} justifyContent={"center"} mt={4}>
    <Box w={"70vw"} display={"flex"} justifyContent={"space-between"} alignContent={'center'} ml={10} bgColor={"pink"} >
      <Box>
      <VStack pl={2} align={"stretch"}>
        <Heading>Profile</Heading>
        <Box >
          <VStack align={"stretch"}>
            <Box display={"flex"} flexDir={"row"}  alignItems={"center"}>
              <Image src={mail} boxSize={"60px"} />
              <Box ml={2}>
                <VStack align={"stretch"}>
                  <Text fontWeight={"bold"}>{profile.entities.email}</Text>
                  <Text fontWeight={"light"}>Email</Text>
                </VStack>
              </Box>
            </Box>
            <Box display={"flex"} flexDir={"row"}  alignItems={"center"}>
              <Image src={sex} boxSize={"60px"} />
              <Box ml={2}>
                <VStack align={"stretch"}>
                  <Text fontWeight={"bold"}>{profile.entities.gender}</Text>
                  <Text fontWeight={"light"}>Gender</Text>
                </VStack>
              </Box>
            </Box>
            <Box display={"flex"} flexDir={"row"}  alignItems={"center"}>
              <Image src={phone} boxSize={"60px"} />
              <Box ml={2}>
                <VStack align={"stretch"}>
                  <Text fontWeight={"bold"}>{profile.entities.phone}</Text>
                  <Text fontWeight={"light"}>Phone</Text>
                </VStack>
              </Box>
            </Box>
            <Box display={"flex"} flexDir={"row"}  alignItems={"center"}>
              <Image src={location} boxSize={"60px"} />
              <Box ml={2}>
                <VStack align={"stretch"}>
                  <Text fontWeight={"bold"}>{profile.entities.address}</Text>
                  <Text fontWeight={"light"}>address</Text>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </Box>
      </VStack>
      </Box>
      <Box mr={7} mt={7} display={'flex'} flexDir={"column"}> 
      <Avatar name='Dan Abrahmov' boxSize={'3xs'} src={profile.entities.image} />
      <Button mt={2} bgColor={'red'} color={"white"}>
        Edit Profile
      </Button>
      </Box>
    </Box>
    </Box>
    <Container maxW={"90vw"} ml={'20px'} mt={'20px'}>
    <Heading>
    List Book
    </Heading>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Container>
    </>
  );}

export default Profile;
