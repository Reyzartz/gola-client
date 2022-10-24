import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, PropsWithChildren } from 'react'
import { Crosshair, X } from 'react-feather'
import { Button } from '../button'

export interface IModalProps {
  open: boolean
  onClose: () => void
  static?: boolean
  centered?: boolean
  children: React.ReactNode | ((props: { open: boolean }) => React.ReactNode)
  className?: string
}

export interface IModalContentProps {
  width?: string | number
  className?: string
}

export interface ICloseButtonProps {
  onClose: () => void
  className?: string
}

const Modal = ({
  children,
  open,
  onClose,
  static: isStatic = false,
  centered = false,
  className
}: IModalProps) => {
  return (
    <Transition show={open || isStatic} as={Fragment}>
      <Dialog
        open={open}
        onClose={onClose}
        static={isStatic}
        className={
          'fixed top-0 left-0 z-30 flex items-center justify-center w-screen h-screen py-14 ' +
          className
        }
        style={{
          alignItems: centered ? 'center' : 'start'
        }}
      >
        {typeof children === 'function' ? children({ open }) : children}

        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='absolute top-0 bottom-0 left-0 right-0 -z-10 bg-neutral-900 opacity-30' />
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

const Content = ({
  children,
  width = 420,
  className
}: PropsWithChildren<IModalContentProps>) => {
  return (
    <Transition.Child
      as={Fragment}
      enter='ease-out duration-300'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='ease-in duration-200'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <Dialog.Panel
        className={
          'relative flex flex-col max-h-full rounded-lg shadow-lg bg-neutral-25 ' +
          className
        }
        style={{ width }}
      >
        {children}
      </Dialog.Panel>
    </Transition.Child>
  )
}

const CloseButton = ({ onClose, className }: ICloseButtonProps) => {
  return (
    <Button
      size='small'
      variant='text'
      className={'absolute text-3xl top-2 right-2 ' + className}
      onClick={onClose}
      icon={X}
    />
  )
}

const Header = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <Dialog.Title
      className={'px-6 py-4 border-b border-neutral-200 ' + className}
    >
      {children}
    </Dialog.Title>
  )
}

const Body = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <Dialog.Description
      className={
        'flex-grow px-6 py-3 overflow-auto overflow-indicator ' + className
      }
      as='div'
    >
      {children}
    </Dialog.Description>
  )
}

const Actions = ({
  children,
  className
}: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={
        'flex justify-end gap-3 px-6 py-4 border-t border-neutral-200 ' +
        className
      }
    >
      {children}
    </div>
  )
}

Modal.Content = Content
Modal.CloseButton = CloseButton
Modal.Header = Header
Modal.Body = Body
Modal.Actions = Actions

export { Modal }
