import React, { ReactNode, useMemo } from 'react'

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

const ButtonBackgroundColors: Record<IButtonColors, string> = {
  primary: 'bg-primary-400',
  secondary: 'bg-neutral-400',
  error: 'bg-error-400',
  warning: 'bg-warning-400',
  success: 'bg-success-400'
}

const ButtonTextColors: Record<IButtonColors, string> = {
  primary: 'text-primary-500',
  secondary: 'text-neutral-500',
  error: 'text-error-500',
  warning: 'text-warning-500',
  success: 'text-success-500'
}

const ButtonBorderColors: Record<IButtonColors, string> = {
  primary: 'border-primary-500',
  secondary: 'border-neutral-500',
  error: 'border-error-500',
  warning: 'border-warning-500',
  success: 'border-success-500'
}

const ButtonContainedHoverColors: Record<IButtonColors, string> = {
  primary: 'hover:bg-primary-500',
  secondary: 'hover:bg-neutral-500',
  error: 'hover:bg-error-500',
  warning: 'hover:bg-warning-500',
  success: 'hover:bg-success-500'
}

const ButtonOutlinedHoverColors: Record<IButtonColors, string> = {
  primary: 'hover:bg-primary-100',
  secondary: 'hover:bg-neutral-100',
  error: 'hover:bg-error-100',
  warning: 'hover:bg-warning-100',
  success: 'hover:bg-success-100'
}

const getSpacing = (size: IButtonSizes, variant: IButtonVariant) => {
  if (size === 'string') return 'p-0'

  if (size === 'large' && variant !== 'text') return 'px-4 py-2'
  if (size === 'medium' && variant !== 'text') return 'px-3 py-1.5'
  if (size === 'small' && variant !== 'text') return 'px-2 py-1'

  if (size === 'large' && variant === 'text') return 'px-2.5 py-2'
  if (size === 'medium' && variant === 'text') return 'px-2 py-1.5'
  if (size === 'small' && variant === 'text') return 'px-1.5 py-1'
}

const getBackgroundStyles = (
  color: IButtonColors,
  variant: IButtonVariant,
  disabled: boolean
) => {
  const styles = []

  if (disabled && variant === 'contained') {
    styles.push('bg-neutral-200')
    return styles
  }

  if (variant === 'contained') {
    styles.push(
      ButtonBackgroundColors[color],
      ButtonContainedHoverColors[color]
    )
  }

  if (variant === 'outlined' && !disabled) {
    styles.push(ButtonOutlinedHoverColors[color])
  }

  return styles
}

const getTextStyles = (
  size: IButtonSizes,
  color: IButtonColors,
  variant: IButtonVariant,
  disabled: boolean
) => {
  const styles = ['font-medium', 'tracking-wider']

  if (size === 'large') {
    styles.push('text-lg')
  }

  if (size === 'medium') {
    styles.push('text-md')
  }

  if (size === 'small') {
    styles.push('text-sm')
  }

  if (disabled) {
    styles.push('text-neutral-400')
    return styles
  }

  if (variant === 'contained') {
    styles.push('text-neutral-800')
  }

  if (variant === 'outlined') {
    styles.push(ButtonTextColors[color])
  }

  if (variant === 'text') {
    styles.push(ButtonTextColors[color], 'hover:underline')
  }

  return styles
}

const getBorderStyles = (
  color: IButtonColors,
  variant: IButtonVariant,
  disabled: boolean
) => {
  const styles = ['rounded-md']

  if (variant === 'contained' || variant === 'text') {
    return styles
  }

  if (disabled) {
    styles.push('border', 'border-neutral-400')
    return styles
  }

  if (variant === 'outlined') {
    styles.push('border', ButtonBorderColors[color])
  }

  return styles
}

const defaultStyles = () => 'border-box  '

const Button = ({
  size = 'medium',
  variant = 'contained',
  color = 'secondary',
  disabled = false,
  children
}: IButtonProps) => {
  const getClasses = useMemo(
    () =>
      [
        defaultStyles(),
        getSpacing(size, variant),
        getBackgroundStyles(color, variant, disabled),
        getTextStyles(size, color, variant, disabled),
        getBorderStyles(color, variant, disabled)
      ]
        .flat()
        .join(' '),
    [color, disabled, size, variant]
  )

  return <button className={getClasses}>{children}</button>
}

export { Button }
