import { memo, PropsWithChildren, useMemo } from 'react'

export type THeadingSizes = 'small' | 'medium' | 'large' | 'xl' | '2xl' | '3xl'

export type THeadingColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'warning'
  | 'success'

export interface IHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: THeadingSizes
  color?: THeadingColors
  className?: string
}

const headingFontSizes: Record<THeadingSizes, string> = {
  small: 'text-xl',
  medium: 'text-2xl',
  large: 'text-3xl',
  xl: 'text-4xl',
  '2xl': 'text-5xl',
  '3xl': 'text-6xl'
}

const headingTextColors: Record<THeadingColors, string> = {
  primary: 'text-primary-600',
  secondary: 'text-neutral-700',
  tertiary: 'text-neutral-500',
  error: 'text-error-500',
  warning: 'text-warning-500',
  success: 'text-success-500'
}

const defaultStyles = 'font-bold'

const Heading = memo(
  ({
    as: Component = 'h3',
    size = 'medium',
    color = 'secondary',
    className,
    children
  }: PropsWithChildren<IHeadingProps>): JSX.Element => {
    const classNames = useMemo(
      () =>
        [
          defaultStyles,
          headingFontSizes[size],
          headingTextColors[color],
          className
        ]
          .flat()
          .join(' '),
      [className, size, color]
    )

    return <Component className={classNames + 'text-'}>{children}</Component>
  }
)

Heading.displayName = 'Heading'

export { Heading }
