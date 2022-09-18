import React from 'react'
import { TaskCard, TasksList } from '@features/scheduler'
import { ITask } from '@common/types'
import { WEEK_DAYS } from '@common/constants'

interface IColumnWrapperProps {
  title: string
  children: React.ReactNode
}

const ColumnWrapper = ({ title, children }: IColumnWrapperProps) => {
  return (
    <div>
      <div>
        <h3 className='py-2 text-lg font-semibold capitalize'>{title}</h3>
      </div>
      {children}
    </div>
  )
}

interface Props {
  tasks: ITask[]
}

const ScheduleTable = ({ tasks }: Props) => {
  return (
    <div className='flex gap-3'>
      {WEEK_DAYS.map(day => (
        <ColumnWrapper title={day} key={day}>
          <TasksList tasks={tasks} listItemComponent={TaskCard} />
        </ColumnWrapper>
      ))}
    </div>
  )
}

export { ScheduleTable }
