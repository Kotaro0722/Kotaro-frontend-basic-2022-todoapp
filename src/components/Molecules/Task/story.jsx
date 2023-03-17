import React from "react";
import Component from "./index";

export default {
  component: Component,
  title: "Molecules/Task",
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;

export const Default = Template.bind({});
Default.args = {
  onTaskChange: () => console.log("change"),
  onTaskComplete: () => console.log("complete"),
  taskName: "a",
  defaultIsEditing: false,
};
