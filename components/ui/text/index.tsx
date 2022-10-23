import { memo, PropsWithChildren, useMemo } from 'react'

export type TTextSizes = 'xs' | 'small' | 'medium' | 'large'

export type TTextColors =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'error'
  | 'warning'
  | 'success'

export type TTextElements =
  | 'span'
  | 'div'
  | 'label'
  | 'p'
  | 'b'
  | 'i'
  | 'u'
  | 'mark'
  | 'del'
  | 'kbd'
  | 'sub'
  | 'sup'

export interface ITextProps {
  as?: TTextElements
  size?: TTextSizes
  color?: TTextColors
  className?: string
}

const textFontSizes: Record<TTextSizes, string> = {
  xs: 'text-xs',
  small: 'text-sm',
  medium: 'text-md',
  large: 'text-lg'
}

const textTextColors: Record<TTextColors, string> = {
  primary: 'text-primary-600',
  secondary: 'text-neutral-700',
  tertiary: 'text-neutral-500',
  error: 'text-error-500',
  warning: 'text-warning-500',
  success: 'text-success-500'
}

const Text = memo(
  ({
    as: Component = 'span',
    size = 'medium',
    color = 'tertiary',
    className,
    children
  }: PropsWithChildren<ITextProps>): JSX.Element => {
    const classNames = useMemo(
      () =>
        [textFontSizes[size], textTextColors[color], className]
          .flat()
          .join(' '),
      [className, size, color]
    )

    return <Component className={classNames + 'text-'}>{children}</Component>
  }
)

Text.displayName = 'Text'

export { Text }
