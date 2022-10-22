import React, {
  memo,
  MouseEventHandler,
  PropsWithChildren,
  useMemo
} from 'react'
import { Icon, TIconColors } from '@components/ui'

type TButtonVariant = 'contained' | 'outlined' | 'text'
type TButtonSizes = 'small' | 'medium' | 'large' | 'string'
type TButtonColors = 'primary' | 'secondary' | 'success' | 'error' | 'warning'

interface IButtonProps {
  size?: TButtonSizes
  variant?: TButtonVariant
  color?: TButtonColors
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  icon?: React.ComponentType<any>
}

const ButtonBackgroundColors: Record<TButtonColors, string> = {
  primary: 'bg-primary-400',
  secondary: 'bg-neutral-400',
  error: 'bg-error-400',
  warning: 'bg-warning-400',
  success: 'bg-success-400'
}

const ButtonTextColors: Record<TButtonColors, string> = {
  primary: 'text-primary-500',
  secondary: 'text-neutral-500',
  error: 'text-error-500',
  warning: 'text-warning-500',
  success: 'text-success-500'
}

const ButtonBorderColors: Record<TButtonColors, string> = {
  primary: 'border-primary-500',
  secondary: 'border-neutral-500',
  error: 'border-error-500',
  warning: 'border-warning-500',
  success: 'border-success-500'
}

const ButtonContainedHoverColors: Record<TButtonColors, string> = {
  primary: 'hover:bg-primary-500',
  secondary: 'hover:bg-neutral-500',
  error: 'hover:bg-error-500',
  warning: 'hover:bg-warning-500',
  success: 'hover:bg-success-500'
}

const ButtonOutlinedHoverColors: Record<TButtonColors, string> = {
  primary: 'hover:bg-primary-100',
  secondary: 'hover:bg-neutral-100',
  error: 'hover:bg-error-100',
  warning: 'hover:bg-warning-100',
  success: 'hover:bg-success-100'
}

const getSpacing = (
  size: TButtonSizes,
  variant: TButtonVariant,
  isIconOnly: boolean
) => {
  if (size === 'string') return 'p-0'

  if (size === 'large' && isIconOnly) return 'p-2.5'
  if (size === 'medium' && isIconOnly) return 'p-1.5'
  if (size === 'small' && isIconOnly) return 'p-1'

  if (size === 'large' && variant !== 'text') return 'px-4 py-2'
  if (size === 'medium' && variant !== 'text') return 'px-3 py-1.5'
  if (size === 'small' && variant !== 'text') return 'px-2 py-1'

  if (size === 'large' && variant === 'text') return 'px-2.5 py-2'
  if (size === 'medium' && variant === 'text') return 'px-2 py-1.5'
  if (size === 'small' && variant === 'text') return 'px-1.5 py-1'
}

const getBackgroundStyles = (
  color: TButtonColors,
  variant: TButtonVariant,
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
  size: TButtonSizes,
  color: TButtonColors,
  variant: TButtonVariant,
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
  color: TButtonColors,
  variant: TButtonVariant,
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

const getIconStyles = (
  variant: TButtonVariant,
  isIconOnly: boolean,
  disabled: boolean
) => {
  const styles = []

  if (variant === 'text' && isIconOnly && !disabled) {
    styles.push('hover:scale-110', 'transition-transform')
  }

  return styles
}

const getIconColor = (
  color: TButtonColors,
  variant: TButtonVariant,
  disabled: boolean
): TIconColors => {
  if (disabled) {
    return 'secondary-light'
  }

  if (variant === 'contained') {
    return 'secondary-dark'
  }

  return color
}

const defaultStyles = 'border-box'

const Button = memo(
  ({
    size = 'medium',
    variant = 'contained',
    color = 'secondary',
    disabled = false,
    onClick,
    children,
    icon,
    className
  }: PropsWithChildren<IButtonProps>) => {
    const iconSize = useMemo(() => (size === 'string' ? 'medium' : size), [
      size
    ])

    const isIconOnly = useMemo(
      () => children === undefined && icon !== undefined,
      [children, icon]
    )

    const classNames = useMemo(
      () =>
        [
          defaultStyles,
          getSpacing(size, variant, isIconOnly),
          getBackgroundStyles(color, variant, disabled),
          getTextStyles(size, color, variant, disabled),
          getBorderStyles(color, variant, disabled),
          getIconStyles(variant, isIconOnly, disabled),
          className
        ]
          .flat()
          .join(' '),
      [color, disabled, size, variant, className, isIconOnly]
    )

    return (
      <button className={classNames} disabled={disabled} onClick={onClick}>
        {icon !== undefined && (
          <Icon
            as={icon}
            size={iconSize}
            color={getIconColor(color, variant, disabled)}
          />
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
