import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import { TaskCard } from '@features/scheduler'
import { tasks } from '@helpers/mock-data'

export default {
  title: 'Features/Scheduler/TaskCard',
  component: TaskCard
} as Meta<typeof TaskCard>

const Template: ComponentStory<typeof TaskCard> = args => <TaskCard {...args} />

export const Default = Template.bind({})
Default.args = {
  task: tasks[0]
}
