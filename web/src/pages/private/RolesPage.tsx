import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { mockRolesTable } from "../../components/tables/mockRolesTable";
import RolesTable from "../../components/tables/RolesTable";

export const RolesPage = () => {
  return (
    <Box>
      <VStack align="flex-start" spacing={3} w="full">
        <Heading>Roles</Heading>
        <Text>
          Here you can review, update or delete the roles of the system
        </Text>
        <Button size="sm">New Role +</Button>
        <Roles />
      </VStack>
    </Box>
  );
};

function Roles() {
  const roles = [
    {
      id: 1,
      name: "Admin",
      description: "Admin role",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
    },
    {
      id: 2,
      name: "User",
      description: "User role",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
    },
  ];

  return (
    <SimpleGrid
      bg="green.100"
      columns={2}
      spacing={3}
      w="full"
      minChildWidth={600}
    >
      {roles.map((role) => (
        <VStack
          key={role.id}
          p={4}
          spacing={3}
          shadow="md"
          borderWidth="1px"
          rounded="lg"
        >
          <Heading fontSize="xl">{role.name}</Heading>
          <RolesTable data={mockRolesTable} />
        </VStack>
      ))}
    </SimpleGrid>
  );
}
