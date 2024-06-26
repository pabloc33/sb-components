import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
  title: "UI/labels/MyLabel",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
    fontColor: { control: "color" },
  },
  component: MyLabel,
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic label",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secundary label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom color label",
    fontColor: "#FF0000",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom background color label",
    fontColor: "white",
    backgroundColor: "black",
  },
};
