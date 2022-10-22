import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'

import { Card, TCardColors, TCardSize, TCardVariant } from '.'

export default {
  title: 'UI/Card',
  component: Card
} as Meta<typeof Card>

//spell-checker:disable

export const Colors: ComponentStory<typeof Card> = () => (
  <div className='flex flex-wrap items-center gap-10'>
    {['white', 'primary', 'secondary', 'success', 'error', 'warning'].map(
      color => (
        <Card
          key={color}
          color={color as TCardColors}
          width={256}
          variant='outlined'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          suscipit ratione minus. Dolore placeat sint,
        </Card>
      )
    )}
  </div>
)

export const Size: ComponentStory<typeof Card> = () => (
  <div className='space-x-10'>
    {['large', 'medium', 'small'].map(size => (
      <Card key={size} size={size as TCardSize} width={256} color='primary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        suscipit ratione minus. Dolore placeat sint,
      </Card>
    ))}
  </div>
)

export const Variants: ComponentStory<typeof Card> = () => (
  <div className='flex items-center gap-10'>
    {['elevated', 'outlined', 'string'].map(variant => (
      <Card
        key={variant}
        variant={variant as TCardVariant}
        width={256}
        color='primary'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
        suscipit ratione minus. Dolore placeat sint,
      </Card>
    ))}
  </div>
)

//spell-checker:enable
