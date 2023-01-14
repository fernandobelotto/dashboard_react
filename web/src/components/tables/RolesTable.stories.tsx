import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RolesTable from "./RolesTable";
import { mockRolesTable } from "./mockRolesTable";
import { ChakraProvider } from "@chakra-ui/react";

export default {
  title: "Components/RolesTable",
  component: RolesTable,
  argTypes: {
    data: { control: "color" },
  },
} as ComponentMeta<typeof RolesTable>;

const Template: ComponentStory<typeof RolesTable> = (args) => (
  <ChakraProvider>
    <RolesTable {...args} data={mockRolesTable} />
  </ChakraProvider>
);

export const Primary = Template.bind({});
