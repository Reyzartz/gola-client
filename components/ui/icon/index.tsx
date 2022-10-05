export type TIconColors =
  | 'primary-light'
  | 'primary'
  | 'primary-dark'
  | 'secondary-light'
  | 'secondary'
  | 'secondary-dark'
  | 'error-light'
  | 'error'
  | 'error-dark'
  | 'warning-light'
  | 'warning'
  | 'warning-dark'
  | 'success-light'
  | 'success'
  | 'success-dark'

export type TIconSizes = 'small' | 'medium' | 'large'

const IconColors: Record<TIconColors, string> = {
  'primary-light': 'stroke-primary-400',
  primary: 'stroke-primary-500',
  'primary-dark': 'stroke-primary-600',

  'secondary-light': 'stroke-neutral-400',
  secondary: 'stroke-neutral-500',
  'secondary-dark': 'stroke-neutral-600',

  'error-light': 'stroke-error-400',
  error: 'stroke-error-500',
  'error-dark': 'stroke-error-600',

  'warning-light': 'stroke-warning-400',
  warning: 'stroke-warning-500',
  'warning-dark': 'stroke-warning-600',

  'success-light': 'stroke-success-400',
  success: 'stroke-success-500',
  'success-dark': 'stroke-success-600'
}

const IconSizes: Record<TIconSizes, number> = {
  small: 16,
  medium: 24,
  large: 32
}

export interface IIconProps {
  as: React.ComponentType<any>
  color?: TIconColors
  size?: TIconSizes
  className?: string
}

const Icon = ({
  as: IconComponent,
  color = 'secondary',
  size = 'medium',
  className = ''
}: IIconProps) => {
  return (
    <IconComponent
      className={className + IconColors[color]}
      width={IconSizes[size]}
      height={IconSizes[size]}
    />
  )
}

export { Icon }
