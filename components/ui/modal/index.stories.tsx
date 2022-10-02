import React, { useState } from 'react'
import { Meta, ComponentStory } from '@storybook/react'

import { Modal } from '.'
import { Button } from '../button'

export default {
  title: 'ui/Modal',
  component: Modal
} as Meta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => {
  const [open, setIsOpen] = useState(true)

  return (
    <>
      <Button color='primary' onClick={() => setIsOpen(true)}>
        Toggle Modal
      </Button>

      <Modal {...args} open={open} onClose={() => setIsOpen(false)}></Modal>
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: (
    <Modal.Content>
      <Modal.Header>Modal Header</Modal.Header>

      <Modal.Body>
        Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex deserunt
        exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat
        veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem
        ullamco minim nostrud elit officia tempor esse quis. Sunt ad dolore quis
        aute consequat. Magna exercitation reprehenderit magna aute tempor
        cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
        incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
        laboris do dolor eiusmod.
      </Modal.Body>

      <Modal.Actions>
        <Button variant='text'>Cancel</Button>

        <Button color='primary'>Confirm</Button>
      </Modal.Actions>
    </Modal.Content>
  )
}

export const Centered = Template.bind({})
Centered.args = {
  centered: true,
  children: (
    <Modal.Content>
      <Modal.Header>Modal Header</Modal.Header>

      <Modal.Body>
        Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex deserunt
        exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat
        veniam incididunt duis in sint irure nisi.
      </Modal.Body>

      <Modal.Actions>
        <Button variant='text'>Cancel</Button>

        <Button color='primary'>Confirm</Button>
      </Modal.Actions>
    </Modal.Content>
  )
}

export const Scrollable = Template.bind({})
Scrollable.args = {
  children: (
    <Modal.Content>
      <Modal.Header>Modal Header</Modal.Header>

      <Modal.Body>
        Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex deserunt
        exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat
        veniam incididunt duis in sint irure nisi. Lorem aliqua enim laboris do
        dolor eiusmod. Sit nulla est ex deserunt exercitation anim occaecat.
        Nostrud ullamco deserunt aute id consequat veniam incididunt duis in
        sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
        officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
        exercitation reprehenderit magna aute tempor cupidatat consequat elit
        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
        eiusmod. Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex
        deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
        consequat veniam incididunt duis in sint irure nisi. Mollit officia
        cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt
        ad dolore quis aute consequat. Magna exercitation reprehenderit magna
        aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor
        eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod
        Lorem aliqua enim laboris do dolor eiusmod. Lorem aliqua enim laboris do
        dolor eiusmod. Sit nulla est ex deserunt exercitation anim occaecat.
        Nostrud ullamco deserunt aute id consequat veniam incididunt duis in
        sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
        officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
        exercitation reprehenderit magna aute tempor cupidatat consequat elit
        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
        eiusmod. Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex
        deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id
        consequat veniam incididunt duis in sint irure nisi. Mollit officia
        cillum Lorem ullamco minim nostrud elit officia tempor esse quis. Sunt
        ad dolore quis aute consequat.mod Lorem aliqua enim laboris do dolor
        eiusmod.
      </Modal.Body>

      <Modal.Actions>
        <Button variant='text'>Cancel</Button>

        <Button color='primary'>Confirm</Button>
      </Modal.Actions>
    </Modal.Content>
  )
}

export const CustomWidth = Template.bind({})
CustomWidth.args = {
  centered: true,
  children: (
    <Modal.Content width={900}>
      <Modal.Header>Modal Header</Modal.Header>

      <Modal.Body>
        Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex deserunt
        exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat
        veniam incididunt duis in sint irure nisi.Lorem aliqua enim laboris do
        dolor eiusmod. Sit nulla est ex deserunt exercitation anim occaecat.
        Nostrud ullamco deserunt aute id consequat veniam incididunt duis in
        sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
        officia tempor esse quis. Sunt ad dolore quis aute consequat.mod Lorem
        aliqua enim laboris do dolor eiusmod.
      </Modal.Body>

      <Modal.Actions>
        <Button variant='text'>Cancel</Button>

        <Button color='primary'>Confirm</Button>
      </Modal.Actions>
    </Modal.Content>
  )
}

export const Static = Template.bind({})
Static.args = {
  static: true,
  children: (
    <Modal.Content>
      <Modal.Header>Modal Header</Modal.Header>

      <Modal.Body>
        Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex deserunt
        exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat
        veniam incididunt duis in sint irure nisi.
      </Modal.Body>

      <Modal.Actions>
        <Button color='primary'>Confirm</Button>
      </Modal.Actions>
    </Modal.Content>
  )
}

export const WithCloseButton = Template.bind({})
WithCloseButton.args = {
  children: (
    <Modal.Content>
      <Modal.CloseButton onClose={() => console.log('Close Modal')} />
      <Modal.Header>Modal Header</Modal.Header>

      <Modal.Body>
        Lorem aliqua enim laboris do dolor eiusmod. Sit nulla est ex deserunt
        exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat
        veniam incididunt duis in sint irure nisi. Lorem aliqua enim laboris do
        dolor eiusmod. Sit nulla est ex deserunt exercitation anim occaecat.
        Nostrud ullamco deserunt aute id consequat veniam incididunt duis in
        sint irure nisi.
      </Modal.Body>

      <Modal.Actions>
        <Button variant='text'>Cancel</Button>

        <Button color='primary'>Confirm</Button>
      </Modal.Actions>
    </Modal.Content>
  )
}
