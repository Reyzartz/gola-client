import { PropsWithChildren, useMemo } from 'react'

export type TCardColors =
  | 'white'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'warning'

export type TCardSize = 'small' | 'medium' | 'large'

export type TCardVariant = 'elevated' | 'outlined' | 'string'

const cardBackgroundColors: Record<TCardColors, string> = {
  white: 'bg-white',
  primary: 'bg-primary-100',
  secondary: 'bg-neutral-100',
  error: 'bg-error-100',
  warning: 'bg-warning-100',
  success: 'bg-success-100'
}

const cardBorderColors: Record<TCardColors, string> = {
  white: 'border-neutral-300',
  primary: 'border-primary-300',
  secondary: 'border-neutral-300',
  error: 'border-error-300',
  warning: 'border-warning-300',
  success: 'border-success-300'
}

export interface ICardProps {
  className?: string
  color?: TCardColors
  width?: number | string
  height?: number | string
  size?: TCardSize
  variant?: TCardVariant
}

const getSpacing = (variant: TCardVariant, size: TCardSize) => {
  if (variant === 'string') return 'rounded-md'

  switch (size) {
    case 'small':
      return 'px-3 py-2 rounded-md'
    case 'medium':
      return 'px-5 py-4 rounded-md'
    case 'large':
      return 'px-7 py-6 rounded-lg'
  }
}

const getBorderStyles = (variant: TCardVariant, color: TCardColors) => {
  if (variant !== 'outlined') return ''

  return ['border', cardBorderColors[color]]
}

const getShadowStyles = (variant: TCardVariant) => {
  if (variant !== 'elevated') return ''

  return 'shadow'
}
const defaultStyles = 'inline-block'

const Card = ({
  children,
  color = 'white',
  width,
  height,
  size = 'medium',
  variant = 'elevated',
  className
}: PropsWithChildren<ICardProps>) => {
  const classNames = useMemo(
    () =>
      [
        defaultStyles,
        cardBackgroundColors[color],
        getSpacing(variant, size),
        getBorderStyles(variant, color),
        getShadowStyles(variant),
        className
      ]
        .flat()
        .join(' '),
    [className, color, size, variant]
  )

  return (
    <div className={classNames} style={{ width, height }}>
      {children}
    </div>
  )
}

export { Card }
