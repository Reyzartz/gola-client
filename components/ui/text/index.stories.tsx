import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import { Text, TTextColors, TTextElements, TTextSizes } from '.'

export default {
  title: 'UI/Text',
  component: Text
} as Meta<typeof Text>

export const Sizes: ComponentStory<typeof Text> = () => (
  <div className='flex flex-col flex-wrap gap-4'>
    {['xs', 'small', 'medium', 'large'].map(size => (
      <Text key={size} size={size as TTextSizes}>
        Text Size - {size}
      </Text>
    ))}
  </div>
)

export const Colors: ComponentStory<typeof Text> = () => (
  <div className='flex flex-col flex-wrap gap-4'>
    {['primary', 'secondary', 'tertiary', 'error', 'warning', 'success'].map(
      color => (
        <Text key={color} color={color as TTextColors}>
          Text color - {color}
        </Text>
      )
    )}
  </div>
)

export const Components: ComponentStory<typeof Text> = () => (
  <div className='flex flex-col flex-wrap items-start gap-4'>
    {[
      'span',
      'div',
      'label',
      'p',
      'b',
      'i',
      'u',
      'mark',
      'del',
      'kbd',
      'sub',
      'sup'
    ].map(as => (
      <Text key={as} as={as as TTextElements}>
        Text as - {as}
      </Text>
    ))}
  </div>
)
