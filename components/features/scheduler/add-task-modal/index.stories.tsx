import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import { AddTaskModal } from '.'

export default {
  title: 'Features/Scheduler/AddTaskModal',
  component: AddTaskModal
} as Meta<typeof AddTaskModal>

const Template: ComponentStory<typeof AddTaskModal> = args => (
  <AddTaskModal {...args} />
)

export const Default = Template.bind({})
Default.args = {
  showModal: true,
  onSubmit: task => console.log({ task })
}
