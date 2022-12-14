import { ITask } from '@common/types'
import React from 'react'

interface Props {
  task: ITask
}

const TaskCard = ({ task: { title } }: Props) => {
  return (
    <div className='p-3 text-sm border-2 rounded-md bg-slate-200 border-slate-400 max-w-max'>
      {title}
    </div>
  )
}

export { TaskCard }
