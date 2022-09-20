import React, { useMemo, useState } from 'react'
import { TaskCard, TasksList } from '@features/scheduler'
import { ITask } from '@common/types'
import { addDays, format } from 'date-fns'
import { getStartDate, getWeeklyTasks } from '@helpers/utils'

const ColumnHeader = ({ date }: { date: Date }) => {
  return (
    <div className='py-2'>
      <h3 className='text-lg font-semibold capitalize '>
        {format(date, 'EEEE')}
      </h3>
      <h5 className='text-sm capitalize '>{format(date, 'd LLLL')}</h5>
    </div>
  )
}

interface Props {
  tasks: ITask[]
}

const ScheduleTable = ({ tasks }: Props) => {
  const [weeklyIndex, setWeeklyIndex] = useState(0)

  const startDate = useMemo(() => getStartDate(tasks), [tasks])
  const weeklyTasks = useMemo(() => getWeeklyTasks(tasks), [tasks])

  console.log({ weeklyTasks })

  return (
    <section>
      <div className='flex gap-4'>
        <button onClick={() => setWeeklyIndex(weeklyIndex - 1)}>&lt;</button>
        {format(addDays(startDate, weeklyIndex * 7), 'd LLLL')} -{' '}
        {format(addDays(startDate, weeklyIndex * 7 + 6), 'd LLLL')}
        <button onClick={() => setWeeklyIndex(weeklyIndex + 1)}>&gt;</button>
      </div>
      <div className='grid grid-cols-7 gap-2'>
        {weeklyTasks[weeklyIndex].map((days, ind) => (
          <div key={ind}>
            <ColumnHeader date={addDays(startDate, ind + weeklyIndex * 7)} />
            <TasksList tasks={days} listItemComponent={TaskCard} />
          </div>
        ))}
      </div>
    </section>
  )
}

export { ScheduleTable }
