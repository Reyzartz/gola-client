import { ITask } from '@common/types'
import { differenceInDays, getDay, max, min } from 'date-fns'

// Returns the earliest of the given task.
export const getStartDate = (tasks: ITask[]) =>
  min(tasks.map(({ date }) => date))

//  Return the latest of the given task.
export const getEndDate = (tasks: ITask[]) => max(tasks.map(({ date }) => date))

// Return lists of tasks per day
export const getDailyTasks = (tasks: ITask[]) => {
  const startDate = getStartDate(tasks)
  const endDate = getEndDate(tasks)

  const totalDays = differenceInDays(endDate, startDate) + 1

  const days: ITask[][] = [...Array(totalDays)].map(() => [])

  tasks.forEach(task => {
    const index = differenceInDays(task.date, startDate)
    days[index].push(task)
  })

  return days
}

// Return lists of tasks per week
export const getWeeklyTasks = (tasks: ITask[]) => {
  const startDate = getStartDate(tasks)
  const endDate = getEndDate(tasks)
  const dailyTasks = getDailyTasks(tasks)

  const totalWeeks = Math.ceil(dailyTasks.length / 7)
  const weeks: ITask[][][] = [...Array(totalWeeks)].map(() => [])

  const startBufferDays = getDay(startDate)
  const endBufferDays = 6 - getDay(endDate)
  ;[...Array(startBufferDays), ...dailyTasks, ...Array(endBufferDays)].forEach(
    (day, ind) => {
      weeks[Math.floor(ind / 7)][ind % 7] = day ?? []
    }
  )

  return weeks
}
