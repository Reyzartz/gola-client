import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Shared/Logo',
  component: Logo
} as Meta<typeof Logo>

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />

export const Large = Template.bind({})
Large.args = {
  size: 'large'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'medium'
}

export const Small = Template.bind({})
Small.args = {
  size: 'small'
}
