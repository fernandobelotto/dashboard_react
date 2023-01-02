import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Center, Heading, useToast, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppInput } from "../components/AppInput";
import { useLoginMutation } from "../store/api";

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

  const toast = useToast();
  function onSubmit(values: any) {
    login(values)
      .unwrap()
      .then(() => {
        toast({
          title: "Logged in.",
          status: "success",
        });
      })
      .catch((err) => {
        toast({
          title: "An error occurred.",
          description: err.data?.message,
          status: "error",
        });
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
          <Link to="/recover">recover your account here</Link>
        </VStack>
      </form>
    </Center>
  );
};
