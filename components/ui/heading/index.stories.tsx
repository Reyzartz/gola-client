import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'
import { Heading, THeadingColors, THeadingSizes } from '.'

export default {
  title: 'UI/Heading',
  component: Heading
} as Meta<typeof Heading>

export const Sizes: ComponentStory<typeof Heading> = () => (
  <div className='flex flex-col flex-wrap gap-10'>
    {['small', 'medium', 'large', 'xl', '2xl', '3xl'].map(size => (
      <Heading key={size} size={size as THeadingSizes}>
        Heading Size - {size}
      </Heading>
    ))}
  </div>
)

export const Colors: ComponentStory<typeof Heading> = () => (
  <div className='flex flex-col flex-wrap gap-10'>
    {['primary', 'secondary', 'tertiary', 'error', 'warning', 'success'].map(
      color => (
        <Heading key={color} color={color as THeadingColors}>
          Heading color - {color}
        </Heading>
      )
    )}
  </div>
)
