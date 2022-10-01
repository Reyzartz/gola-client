import React from 'react'
import { Meta, ComponentStory } from '@storybook/react'

const colors = {
  primary: {
    'primary-900': 'bg-primary-900',
    'primary-800': 'bg-primary-800',
    'primary-700': 'bg-primary-700',
    'primary-600': 'bg-primary-600',
    'primary-500': 'bg-primary-500',
    'primary-400': 'bg-primary-400',
    'primary-300': 'bg-primary-300',
    'primary-200': 'bg-primary-200',
    'primary-100': 'bg-primary-100',
    'primary-50': 'bg-primary-50',
    'primary-25': 'bg-primary-25'
  },
  neutral: {
    'neutral-900': 'bg-neutral-900',
    'neutral-800': 'bg-neutral-800',
    'neutral-700': 'bg-neutral-700',
    'neutral-600': 'bg-neutral-600',
    'neutral-500': 'bg-neutral-500',
    'neutral-400': 'bg-neutral-400',
    'neutral-300': 'bg-neutral-300',
    'neutral-200': 'bg-neutral-200',
    'neutral-100': 'bg-neutral-100',
    'neutral-50': 'bg-neutral-50',
    'neutral-25': 'bg-neutral-25'
  },
  error: {
    'error-900': 'bg-error-900',
    'error-800': 'bg-error-800',
    'error-700': 'bg-error-700',
    'error-600': 'bg-error-600',
    'error-500': 'bg-error-500',
    'error-400': 'bg-error-400',
    'error-300': 'bg-error-300',
    'error-200': 'bg-error-200',
    'error-100': 'bg-error-100',
    'error-50': 'bg-error-50',
    'error-25': 'bg-error-25'
  },
  warning: {
    'warning-900': 'bg-warning-900',
    'warning-800': 'bg-warning-800',
    'warning-700': 'bg-warning-700',
    'warning-600': 'bg-warning-600',
    'warning-500': 'bg-warning-500',
    'warning-400': 'bg-warning-400',
    'warning-300': 'bg-warning-300',
    'warning-200': 'bg-warning-200',
    'warning-100': 'bg-warning-100',
    'warning-50': 'bg-warning-50',
    'warning-25': 'bg-warning-25'
  },
  success: {
    'success-900': 'bg-success-900',
    'success-800': 'bg-success-800',
    'success-700': 'bg-success-700',
    'success-600': 'bg-success-600',
    'success-500': 'bg-success-500',
    'success-400': 'bg-success-400',
    'success-300': 'bg-success-300',
    'success-200': 'bg-success-200',
    'success-100': 'bg-success-100',
    'success-50': 'bg-success-50',
    'success-25': 'bg-success-25'
  }
}

export const Colors = () => (
  <div className='flex flex-col gap-6'>
    {Object.entries(colors).map(([label, variants]) => {
      return (
        <div key={label}>
          <h3 className='mb-2 text-lg font-semibold capitalize text-neutral-800'>
            {label}
          </h3>

          {Object.entries(variants).map(([variant, value]) => {
            return (
              <div
                key={variant}
                className='inline-block mr-2 overflow-hidden rounded shadow-md max-w-max'
              >
                <div className={`w-24 h-16 ${value}`}></div>
                <label className='block px-2 py-1 text-sm capitalize bold text-neutral-600'>
                  {variant}
                </label>
              </div>
            )
          })}
        </div>
      )
    })}
  </div>
)

export default {
  title: 'UI/Colors'
}
