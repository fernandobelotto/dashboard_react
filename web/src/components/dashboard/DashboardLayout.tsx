import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HeaderBar } from "./HeaderBar";
import { SideBar } from "./SideBar";

export const DashboardLayout = () => {
  return (
    <>
      <Flex minH="97vh" m={3}>
        <Box
          // bg={useColorModeValue("gray.300", "gray.800")}
          w="220px"
          border="1px solid"
          borderColor="gray.300"
          rounded="lg"
          //  bg={useColorModeValue("white", "gray.700")}
        >
          <SideBar />
        </Box>
        <Box
          //  border="1px solid" borderColor="gray.300"

          // bg={useColorModeValue("gray.200", "gray.900")}
          w="full"
          ml={3}
        >
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
            <Box
              border="1px solid"
              borderColor="gray.300"
              // bg={useColorModeValue("gray.50", "gray.700")}
              my={3}
              rounded="md"
            >
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
