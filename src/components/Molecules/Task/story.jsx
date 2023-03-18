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
  onTaskChange: (value) => console.log(value),
  onTaskComplete: () => console.log("complete"),
  taskName: "",
  defaultIsEditing: false,
};
