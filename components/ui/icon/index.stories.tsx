import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'

import { Icon } from '.'
import { Home } from 'react-feather'

export default {
  title: 'UI/Icon',
  component: Icon
} as Meta<typeof Icon>

export const Sizes: ComponentStory<typeof Icon> = () => (
  <div className='flex items-center gap-10'>
    <Icon as={Home} size='small' />
    <Icon as={Home} size='medium' />
    <Icon as={Home} size='large' />
  </div>
)

export const Colors: ComponentStory<typeof Icon> = () => (
  <div className='grid items-center grid-cols-3 gap-x-20 gap-y-10 max-w-min'>
    <Icon as={Home} color='primary-light' />
    <Icon as={Home} color='primary' />
    <Icon as={Home} color='primary-dark' />

    <Icon as={Home} color='secondary-light' />
    <Icon as={Home} color='secondary' />
    <Icon as={Home} color='secondary-dark' />

    <Icon as={Home} color='error-light' />
    <Icon as={Home} color='error' />
    <Icon as={Home} color='error-dark' />

    <Icon as={Home} color='warning-light' />
    <Icon as={Home} color='warning' />
    <Icon as={Home} color='warning-dark' />

    <Icon as={Home} color='success-light' />
    <Icon as={Home} color='success' />
    <Icon as={Home} color='success-dark' />
  </div>
)
