import React, { ReactNode } from 'react'

type IButtonVariant = 'contained' | 'outlined' | 'text'
type IButtonSizes = 'small' | 'medium' | 'large' | 'string'
type IButtonColors = 'primary' | 'secondary' | 'success' | 'error' | 'warning'

interface IButtonProps {
  size?: IButtonSizes
  variant?: IButtonVariant
  color?: IButtonColors
  disabled?: boolean
  children: ReactNode
}

const ButtonColors: Record<IButtonColors, string> = {
  primary: 'blue-400',
  secondary: 'gray-200',
  error: 'red-400',
  success: 'green-400',
  warning: 'yellow-400'
}

const getSpacing = (size: IButtonSizes, variant: IButtonVariant) => {
  switch (true) {
    case size === 'string':
      return 'p-0'
    case size === 'large' && variant !== 'text':
      return 'px-4 py-2'
    case size === 'medium' && variant !== 'text':
      return 'px-3 py-1.5'
    case size === 'small' && variant !== 'text':
      return 'px-2 py-1'
    case size === 'large' && variant === 'text':
      return 'px-2.5 py-2'
    case size === 'medium' && variant === 'text':
      return 'px-2 py-1.5'
    case size === 'small' && variant === 'text':
      return 'px-1.5 py-1'
  }
}

const getBackgroundColor = (
  color: IButtonColors,
  variant: IButtonVariant,
  disabled: boolean
) => {
  if (variant !== 'contained') return ''

  return `bg-${disabled ? 'gray-400' : ButtonColors[color]}`
}

const getBorder = (
  color: IButtonColors,
  variant: IButtonVariant,
  disabled: boolean
) => {
  if (variant !== 'outlined') return ''

  return `border border-${disabled ? 'gray-400' : ButtonColors[color]}`
}

const defaultStyles = () => 'border-box rounded'

const Button = ({
  size = 'medium',
  variant = 'contained',
  color = 'secondary',
  disabled = false,
  children
}: IButtonProps) => {
  return (
    <button
      className={[
        defaultStyles(),
        getSpacing(size, variant),
        getBackgroundColor(color, variant, disabled),
        getBorder(color, variant, disabled)
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export { Button }
