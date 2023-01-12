import {
  Avatar,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import {
  AtSignIcon,
  ChevronDownIcon,
  LockIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/auth.slice";

export function HeaderBar() {
  const { toggleColorMode, colorMode } = useColorMode();

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Flex h="full" justify="flex-end" align="center">
      <Box p={3}>
        <Menu>
          <MenuButton
            display="flex"
            as={Button}
            variant="unstyled"
            rightIcon={<ChevronDownIcon />}
            alignItems="center"
          >
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem icon={<AtSignIcon />}>My Account</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Other">
              <MenuItem onClick={handleLogout} icon={<LockIcon />}>
                Logout
              </MenuItem>
              <MenuItem
                icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              >
                Toggle {colorMode === "light" ? "Dark" : "Light"}
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
