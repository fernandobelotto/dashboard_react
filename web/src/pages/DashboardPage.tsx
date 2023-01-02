import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import { useAppDispatch } from "../store";
import { logout } from "../store/auth.slice";

export const DashboardPage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Center h="90vh">
      <VStack>
        <Heading>Dashboard</Heading>
        <Button onClick={handleLogout}>Logout</Button>
      </VStack>
    </Center>
  );
};
