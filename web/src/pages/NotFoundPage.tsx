import { Center, Heading, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <Center h="90vh">
      <VStack>
        <Heading>404 not found</Heading>
        <Link to="/register">Register here</Link>
        <Link to="/">login here</Link>
      </VStack>
    </Center>
  );
};
