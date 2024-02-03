import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const RootLayout = ({ className, children, ...rest }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('flex flex-row h-screen', className)} {...rest}>
      {children}
    </main>
  )
}

export const SideBar = ({ className, children, ...rest }: ComponentProps<'aside'>) => {
  return (
    <aside
      className={twMerge(['w-[250px] mt-10 h-[100vh + 10px] overflow-auto'], className)}
      {...rest}
    >
      {children}
    </aside>
  )
}

export const Content = React.forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
