import { cn } from '@/app/util/cn-util'
import React from 'react'

export const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <button className={cn('rounded-full p-2 w-fit', className)}>
      {
        children
      }
    </button>
  )
}
