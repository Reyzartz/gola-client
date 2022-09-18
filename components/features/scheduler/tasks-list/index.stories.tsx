import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import { tasks } from '@helpers/mock-data'
import { TasksList, TaskCard } from '@features/scheduler'

export default {
  title: 'Features/Scheduler/TasksList',
  component: TasksList
} as Meta<typeof TasksList>

const Template: ComponentStory<typeof TasksList> = args => (
  <TasksList {...args} />
)

export const Default = Template.bind({})
Default.args = {
  listItemComponent: TaskCard,
  tasks
}
