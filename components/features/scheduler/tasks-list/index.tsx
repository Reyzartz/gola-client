import { ITask } from '@common/types'
import React from 'react'

interface Props {
  tasks: ITask[]
  listItemComponent: React.ComponentType<any>
}

const TasksList = ({ tasks, listItemComponent: ListItem }: Props) => {
  return (
    <ul className='flex flex-col gap-2 max-w-max'>
      {tasks.map(task => (
        <ListItem task={task} key={task.id} />
      ))}
    </ul>
  )
}

export { TasksList }
