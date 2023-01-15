import {
  Button,
  Divider,
  Heading,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { Key, Shortcut } from "@shopify/react-shortcuts";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { colorMode } = useColorMode();

  const shortcuts = [
    {
      ordered: ["1"],
      onMatch: () => navigate("/dashboard/"),
    },
    {
      ordered: ["2"],
      onMatch: () => navigate("/dashboard/users"),
    },
    {
      ordered: ["3"],
      onMatch: () => navigate("/dashboard/entities"),
    },
    {
      ordered: ["4"],
      onMatch: () => navigate("/dashboard/roles"),
    },
  ];

  return (
    <>
      {shortcuts.map((shortcut) => {
        return (
          <Shortcut
            key={shortcut.ordered.join("")}
            held={["Control"]}
            ordered={shortcut.ordered as Key[]}
            onMatch={shortcut.onMatch}
          />
        );
      })}
      <VStack p={3}>
        <Link to="/dashboard">
          <Heading size="md">Company Name</Heading>
        </Link>
        <Divider />
        <Button
          border={
            location.pathname === "/dashboard/users" ? "1px solid" : "none"
          }
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
            location.pathname === "/dashboard/roles" ? "1px solid" : "none"
          }
          borderColor={colorMode === "light" ? "gray.700" : "gray.300"}
          w="full"
          as={Link}
          to="/dashboard/roles"
          size="sm"
        >
          Roles
        </Button>
      </VStack>
    </>
  );
}
