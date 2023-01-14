import { Box, Heading, Text, VStack } from "@chakra-ui/react";

type Props = {};

export const UsersPage = () => {
  return (
    <Box>
      <VStack align="flex-start" spacing={3} w="full">
        <Heading>Roles</Heading>
        <Text>Here you can check the roles</Text>
      </VStack>
    </Box>
  );
};
