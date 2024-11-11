import { Box, Button, FormControl, Heading, Input, Select, VStack } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { useForm } from 'react-hook-form'
import { registerSchema, RegisterSchema } from '../schema/authSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerAsync } from './hooks/async'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function Register() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {register, handleSubmit} = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema)
  })
  const user = useAppSelector((state) => state.auth.entities)
  const onSubmit = async (data: RegisterSchema) => {
    await dispatch(registerAsync(data));
    if (user) {
      console.log("register successful");
    } else {
      console.log("register failed");
    }
    navigate('/login')
  };
  
  return (

    <Box display={"flex"} flexDirection={"column"}>
      <Box w={"25vw"} pt={4} h={"55vh"} bgColor={"white"} border={'2px solid'} rounded={'10px'}>
        <Box w={"23vw"} justifyContent={"center"} ml={4}>
          <Heading mb={4}>Register</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={5}>
              <FormControl>
                <Input
                color={"black"}
                  type="text"
                  {...register("fullname")}
                  bgColor={"#D2D2D2"}
                  placeholder="Name"
                />
              </FormControl>
              <FormControl>
                <Input
                color={"black"}
                  type="email"
                  {...register("email")}
                  bgColor={"#D2D2D2"}
                  placeholder="Email"
                />
              </FormControl>
              <FormControl>
                <Input
                color={"black"}
                  type="password"
                  {...register("password")}
                  bgColor={"#D2D2D2"}
                  placeholder="Password"
                />
              </FormControl>
              <FormControl>
                <Select
                  placeholder="Select option"
                  bgColor={"#D2D2D2"}
                  color={"black"}
                  {...register("role")}
                >
                  <option value="USER">Customer</option>
                  <option value="ADMIN">Trader</option>
                </Select>
              </FormControl>
              <Button type="submit" bgColor={"black"} color={'white'} w={"100%"}>
                Save
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Box>
  )
}

export default Register