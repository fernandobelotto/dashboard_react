import {
  Box,
  Flex,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HeaderBar } from "./HeaderBar";
import { SideBar } from "./SideBar";

export const DashboardLayout = () => {
  const showSidebar = useBreakpointValue(
    {
      base: false,
      sm: true,
    },
    {
      fallback: "md",
    }
  );

  return (
    <>
      <Flex minH="97vh" m={3}>
        {showSidebar ? (
          <Box w="220px" border="1px solid" borderColor="gray.300" rounded="lg">
            <SideBar />
          </Box>
        ) : null}

        <Box w="full" ml={3}>
          <Box
            border="1px solid"
            borderColor="gray.300"
            rounded="lg"
            h="55px"
            bg={useColorModeValue("white", "gray.700")}
            w="full"
          >
            <HeaderBar />
          </Box>
          <main>
            <Box border="1px solid" borderColor="gray.300" my={3} rounded="md">
              <Box p={5}>
                <Outlet />
              </Box>
            </Box>
          </main>
        </Box>
      </Flex>
    </>
  );
};
