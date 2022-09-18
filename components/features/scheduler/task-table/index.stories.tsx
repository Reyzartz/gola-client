import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'

import { ScheduleTable } from '@features/scheduler'
import { tasks } from '@helpers/mock-data'

export default {
  title: 'Features/Scheduler/ScheduleTable',
  component: ScheduleTable
} as Meta<typeof ScheduleTable>

const Template: ComponentStory<typeof ScheduleTable> = args => (
  <ScheduleTable {...args} />
)

export const Weekly = Template.bind({})
Weekly.args = {
  tasks: tasks
}
