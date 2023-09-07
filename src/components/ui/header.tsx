import { ComponentProps, ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode
}

interface HeaderTitleProps {
  children: ReactNode
}

interface HeaderIconProps extends ComponentProps<'button'> {
  children: ReactNode
}

function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <div className="flex w-full items-center pb-4 flex-row justify-center">
      {children}
    </div>
  )
}

function HeaderTitle({ children }: HeaderTitleProps) {
  return <h1 className="font-bold text-gray-800 text-2xl">{children}</h1>
}

function HeaderIcon({ children, ...rest }: HeaderIconProps) {
  return (
    <button {...rest} className="mr-auto">
      {children}
    </button>
  )
}

export const Header = {
  Root: HeaderRoot,
  Title: HeaderTitle,
  Icon: HeaderIcon,
}
