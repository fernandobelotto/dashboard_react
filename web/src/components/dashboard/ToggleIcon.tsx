import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Shortcut } from "@shopify/react-shortcuts";
import { FaMoon, FaSun } from "react-icons/fa";

export function ToggleIcon() {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <>
      <Shortcut held={["Control"]} ordered={["l"]} onMatch={toggleColorMode} />
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={`Switch to ${text} mode`}
      />
    </>
  );
}
