import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

export default {
    title: "Button",
    component: Button,
    argTypes: {onClick: {action: "handleClick"}}
} satisfies Meta<typeof Button>;

//const Template = props => <Button {props} />;

type Story = StoryObj<typeof Button>;

export const Default: Story = {args: {label:"Button"}}
export const Red: Story = {args: {backgroundColor:"red", label:"Button"}}
export const Green: Story = {args: {backgroundColor:"green", label:"Button"}}
export const Primary: Story = {args: {primary:true, label:"Button"}}
export const Large: Story = {args: {primary:true, size:"large", label:"Button"}}

/*
export const Red: Story = {render: () => <Button label="press me" backgroundColor="red" />}
export const Primary: Story = {render: () => <Button primary label="press me" />}
export const Large: Story = {render: () => <Button primary size="large" label="press me" />}
*/

/*
export default {
    title: "Button",
    component: Button
};

######

const meta: Meta<typeof Button> = {
    title: "Button",
    component: Button,
};

export default meta;
*/