import {
  AtSignIcon,
  SettingsIcon,
  ChevronDownIcon,
  LockIcon,
} from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Shortcut } from "@shopify/react-shortcuts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/auth.slice";
import { DrawerSideBar } from "./DrawerSideBar";
import { ToggleIcon } from "./ToggleIcon";

export function HeaderBar() {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  const showBurguer = useBreakpointValue(
    {
      base: true,
      sm: false,
    },
    {
      fallback: "md",
    }
  );

  const navigateToSettings = () => {
    navigate("/dashboard/settings");
  };
  const navigateToAccounts = () => {
    navigate("/dashboard/account");
  };

  return (
    <>
      <Shortcut
        held={["Meta", "Shift"]}
        ordered={["o"]}
        onMatch={handleLogout}
      />
      <Shortcut
        held={["Control"]}
        ordered={["s"]}
        onMatch={navigateToSettings}
      />
      <Shortcut
        held={["Control"]}
        ordered={["p"]}
        onMatch={navigateToAccounts}
      />

      <Flex
        h="full"
        justify={showBurguer ? "space-between" : "flex-end"}
        align="center"
        p={3}
      >
        {showBurguer ? <DrawerSideBar /> : null}

        <Flex>
          <ToggleIcon />
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
                <MenuItem
                  command="⌃p"
                  onClick={() => {
                    navigate("/dashboard/account");
                  }}
                  icon={<AtSignIcon />}
                >
                  My Account
                </MenuItem>
                <MenuItem
                  command="⌃s"
                  onClick={navigateToSettings}
                  icon={<SettingsIcon />}
                >
                  Settings
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Other">
                <MenuItem
                  command="⌃o"
                  onClick={handleLogout}
                  icon={<LockIcon />}
                >
                  Logout
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
}
