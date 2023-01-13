import {
  Button,
  Divider,
  Heading,
  useBreakpointValue,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export function SideBar() {
  let location = useLocation();
  const { colorMode } = useColorMode();

  return (
    <VStack p={3}>
      <Link to="/dashboard">
        <Heading size="md">Company Name</Heading>
        {/*<Avatar*/}
        {/*  bg="gray.700"*/}
        {/*  size="lg"*/}
        {/*/>*/}
      </Link>
      <Divider />
      <Button
        border={location.pathname === "/dashboard/users" ? "1px solid" : "none"}
        borderColor={colorMode === "light" ? "gray.700" : "gray.300"}
        w="full"
        as={Link}
        to="/dashboard/users"
        size="sm"
      >
        Users
      </Button>
      <Button
        border={
          location.pathname === "/dashboard/entities" ? "1px solid" : "none"
        }
        borderColor={colorMode === "light" ? "gray.700" : "gray.300"}
        w="full"
        as={Link}
        to="/dashboard/entities"
        size="sm"
      >
        Entities
      </Button>
      <Button
        border={
          location.pathname === "/dashboard/settings" ? "1px solid" : "none"
        }
        borderColor={colorMode === "light" ? "gray.700" : "gray.300"}
        w="full"
        as={Link}
        to="/dashboard/settings"
        size="sm"
      >
        Settings
      </Button>
    </VStack>
  );
}
