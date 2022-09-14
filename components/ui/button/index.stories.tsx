import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'

import { Button } from '.'

export default {
  title: 'UI/Button',
  component: Button
} as Meta<typeof Button>

export const Variants: ComponentStory<typeof Button> = () => (
  <div className='grid items-center max-w-md grid-cols-4 gap-4 justify-items-start'>
    <Button variant='contained'>Contained</Button>
    <Button variant='outlined'>Outlined</Button>
    <Button variant='text'>Text</Button>
  </div>
)

export const Sizes: ComponentStory<typeof Button> = () => (
  <div className='grid items-center max-w-md grid-cols-4 gap-4 justify-items-start'>
    <Button size='large' variant='contained'>
      Large
    </Button>
    <Button size='medium' variant='contained'>
      Medium
    </Button>
    <Button size='small' variant='contained'>
      Small
    </Button>
    <Button size='string' variant='contained'>
      String
    </Button>

    <Button size='large' variant='outlined'>
      Large
    </Button>
    <Button size='medium' variant='outlined'>
      Medium
    </Button>
    <Button size='small' variant='outlined'>
      Small
    </Button>
    <Button size='string' variant='outlined'>
      String
    </Button>

    <Button size='large' variant='text'>
      Large
    </Button>
    <Button size='medium' variant='text'>
      Medium
    </Button>
    <Button size='small' variant='text'>
      Small
    </Button>
    <Button size='string' variant='text'>
      String
    </Button>
  </div>
)

export const Disabled: ComponentStory<typeof Button> = () => (
  <div className='grid items-center max-w-md grid-cols-4 gap-4 justify-items-start'>
    <Button variant='contained' disabled>
      Contained
    </Button>
    <Button variant='outlined' disabled>
      Outlined
    </Button>
    <Button variant='text' disabled>
      Text
    </Button>
  </div>
)
