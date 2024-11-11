import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useNavigate } from "react-router-dom";
import { checkAsync, loginAsync } from "./hooks/async";
import { useEffect } from "react";
function Login() {
  const {
    register,
    handleSubmit,
    // formState: { errors, isLoading },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const user = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const onSubmit = async (data: LoginSchema) => {
    await dispatch(loginAsync(data));
    dispatch(checkAsync());
  };

  useEffect(() =>{
    if (user.entities.user?.role === "USER") {
      navigate("/home")
    }
    else if (user.entities.user?.role === "ADMIN") {
      navigate("/homeAdmin")
    }
  }, [user,navigate])
  return (
    <Container
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          w={"25vw"}
          pt={4}
          h={"35vh"}
          bgColor={"white"}
          border={"2px solid"}
          rounded={"2%"}
        >
          <Box w={"23vw"} justifyContent={"center"} ml={4}>
            <Heading mb={4}>Login</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={5}>
              <FormControl>
                <Input
                  type="text"
                  color={"black"}
                  {...register("username")}
                  bgColor={"#D2D2D2"}
                  placeholder="Username"
                />
              </FormControl>
              <FormControl>
                <Input
                  type="password"
                  color={"black"}
                  {...register("password")}
                  bgColor={"#D2D2D2"}
                  placeholder="Password"
                />
              </FormControl>
              <Button
                type="submit"
                color={"white"}
                bgColor={"black"}
                w={"100%"}
              >
                Submit
              </Button>
            </VStack>
            </form>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
