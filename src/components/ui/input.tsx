import { ComponentProps, ReactNode } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { tv } from 'tailwind-variants'

interface InputRootProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'error' | 'disabled'
}

interface InputMessageErrorProps {
  children: ReactNode
}

type InputControlProps = ComponentProps<'input'> & {
  className?: string
  variant?: 'default' | 'disabled'
}

interface InputIconProps {
  children: ReactNode
}

interface InputButtonProps extends ComponentProps<'button'> {
  children: ReactNode
  isLoading?: boolean
}

const InputRootVariant = tv({
  base: 'max-w-full w-full border-2 bg-gray-200 h-14 rounded-lg flex flex-row justify-between items-center focus:border-[#A855f7]',
  variants: {
    variant: {
      default: 'border-gray-200',
      error: 'border-red-500',
      disabled: 'bg-gray-100 border-gray-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const InputControlVariant = tv({
  base: 'h-full w-full font-body text-base px-4 py-3',
  variants: {
    variant: {
      default: 'text-gray-600',
      disabled: 'text-gray-400',
    },
  },
})

function InputRoot({
  children,
  className,
  variant = 'default',
}: InputRootProps) {
  return (
    <div className={InputRootVariant({ className, variant })}>{children}</div>
  )
}

function InputMessageError({ children }: InputMessageErrorProps) {
  return <span className="text-sm text-red-500 mt-1">{children}</span>
}

function InputButton({ children, isLoading, ...rest }: InputButtonProps) {
  return (
    <button className="w-16 h-full flex items-center justify-center" {...rest}>
      {isLoading ? (
        <ClipLoader
          loading={true}
          size={24}
          aria-label="Loading Spinner"
          data-testid="loader"
          color="#A855f7"
          className="w-4 h-4"
        />
      ) : (
        children
      )}
    </button>
  )
}

function InputControl({
  variant = 'default',
  className,
  ...props
}: InputControlProps) {
  return (
    <input {...props} className={InputControlVariant({ className, variant })} />
  )
}

function InputIcon({ children }: InputIconProps) {
  return (
    <div className="flex items-center justify-center border-0">{children}</div>
  )
}

export const Input = {
  Root: InputRoot,
  Control: InputControl,
  Icon: InputIcon,
  Button: InputButton,
  MessageError: InputMessageError,
}
