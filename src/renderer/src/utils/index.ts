import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormat = new Intl.DateTimeFormat('es-PE', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number) => dateFormat.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
