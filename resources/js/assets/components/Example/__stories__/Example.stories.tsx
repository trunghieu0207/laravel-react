import React from 'react';
import {Meta} from "@storybook/react/types-6-0";
import Example from "../Example";

export default {
    title: 'My Component/Form',
    component: Example,
} as Meta;

export const Default = () => (<Example />)
