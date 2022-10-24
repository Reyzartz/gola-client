import { ITask } from '@common/types'
import { Button, Heading, Modal, Text } from '@components/ui'
import { useRef } from 'react'

export interface IAddTaskModalProps {
  showModal?: boolean
  onClose: () => void
  onSubmit: (task: ITask) => void
}

const AddTaskModal = ({
  showModal = false,
  onClose,
  onSubmit
}: IAddTaskModalProps): JSX.Element => {
  const titleRef = useRef<HTMLInputElement>(null!)
  const descriptionRef = useRef<HTMLTextAreaElement>(null)

  const onSubmitHandler = () => {
    onSubmit({
      id: Math.random().toString(),
      title: titleRef.current.value,
      date: new Date()
    })
  }

  return (
    <Modal open={showModal} onClose={onClose}>
      <Modal.Content>
        <Modal.CloseButton onClose={onClose} />
        <Modal.Header>
          <Heading size='small'>Add task</Heading>
        </Modal.Header>

        <Modal.Body className='space-y-3'>
          {
            // this will be replaced by a form which has submit, reset, isValid  as a render prop
          }
          {/* <FormInput> */}
          <div className='space-y-0.5'>
            {/* <FormLabel> */}
            <Text as='label' size='small'>
              Task title
              <Text as='span' color='error'>
                *
              </Text>
            </Text>
            {/* <FormTextInput> */}
            <input
              className='w-full px-4 py-3 text-sm border rounded-md border-neutral-200 placeholder-neutral-300'
              placeholder='Enter task title'
              type='text'
              ref={titleRef}
              autoFocus
            />
          </div>

          <div className='space-y-0.5'>
            {/* <FormLabel> */}
            <Text as='label' size='small'>
              Task description
            </Text>
            {/* <FormTextArea> */}
            <textarea
              className='w-full px-4 py-3 text-sm border rounded-md border-neutral-200 placeholder-neutral-300'
              placeholder='Enter task description'
              ref={descriptionRef}
            />
          </div>
        </Modal.Body>

        <Modal.Actions>
          <Button variant='text'>Cancel</Button>

          <Button color='primary' onClick={onSubmitHandler}>
            Submit
          </Button>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  )
}

export { AddTaskModal }
