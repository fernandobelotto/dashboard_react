import { Button, Center, Heading, useToast, VStack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AppInput } from "../components/AppInput";
import { useAppDispatch } from "../store";
import { useLoginMutation } from "../store/api";
import { setToken } from "../store/auth.slice";

type FormType = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().required(),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(schema),
  });

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();

  function onSubmit(values: any) {
    login(values)
      .unwrap()
      .then((res) => {
        toast({
          title: "Logged in.",
          status: "success",
        });
        dispatch(setToken(res.id));
        navigate("/dashboard");
      })
      .catch((err) => {
        toast({
          title: "An error occurred.",
          description: err.data?.message,
          status: "error",
        });
        console.log(err);
      });
  }

  return (
    <Center h="90vh">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          <Heading>Login</Heading>
          <VStack p={3} border="1px solid" borderColor="gray.300" rounded="lg">
            <AppInput<FormType>
              control={control}
              name="email"
              label="E-mail"
              errors={errors}
              type="email"
              isDisabled={isLoading}
            />
            <AppInput<FormType>
              control={control}
              name="password"
              label="Password"
              errors={errors}
              type="password"
              isDisabled={isLoading}
            />
            <Button size="sm" type="submit" isLoading={isLoading}>
              Login
            </Button>
          </VStack>
          <Link to="/register">Register here</Link>
          {/* TODO */}
          {/* <Link to="/recover">recover your account here</Link> */}
        </VStack>
      </form>
    </Center>
  );
};
