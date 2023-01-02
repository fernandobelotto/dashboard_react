import { Center, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const RecoverPage = () => {
  return (
    <Center h="90vh">
      <VStack>
        <Link to="/">Login</Link>
        <Link to="/register">Register</Link>
      </VStack>
    </Center>
  );
};
