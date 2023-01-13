import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { AppInput } from "../../components/AppInput";
import { DeleteAccountPopover } from "../../components/deleteAccountPopover";
import { useAppDispatch, useAppSelector } from "../../store";
import { useUpdateAccountMutation } from "../../store/api";

type FormType = {
  email: string;
  password: string;
};

export const AccountPage = () => {
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

  const { token } = useAppSelector((state) => state.auth);

  const [updateAccount, { isLoading: isUpdating }] = useUpdateAccountMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();

  function onSubmit(values: any) {
    updateAccount({ ...values, id: token })
      .unwrap()
      .then(() => {
        toast({
          title: "Account updated.",
          status: "success",
        });
        // dispatch(setToken(res.id));
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <VStack align="flex-start" spacing={3} w="full">
          <Flex justify="space-between" align="center" w="full">
            <Heading>My Account</Heading>
            <DeleteAccountPopover />
          </Flex>
          <Text>Here you can review, update or delete your account</Text>
          <VStack
            align="flex-start"
            spacing={2}
            border="1px solid"
            borderColor="gray.300"
            rounded="md"
            p={5}
          >
            <AppInput<FormType>
              control={control}
              name="email"
              label="E-mail"
              errors={errors}
              size="sm"
              type="email"
              isDisabled={isUpdating}
            />
            <AppInput<FormType>
              control={control}
              name="password"
              label="Password"
              errors={errors}
              type="password"
              isDisabled={isUpdating}
            />
            <Button size="sm" type="submit" isLoading={isUpdating}>
              update account
            </Button>
          </VStack>
          {/* <Flex w="full" justify="flex-end" align="center">
            <Button size="sm" isLoading={isLoading}>
              change password
            </Button>
          </Flex> */}
        </VStack>
      </Box>
    </form>
  );
};
