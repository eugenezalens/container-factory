import { PropsWithChildren, ReactNode } from 'react'

export type TContainerFactoryBodyCustom = {
  type: 'custom'
  render: (data: { dataTestId: string; children: PropsWithChildren['children'] }) => ReactNode
}

export type TContainerFactoryBodyDefault = {
  type: 'default'
  className?: string
}

export type TContainerFactoryBody = TContainerFactoryBodyCustom | TContainerFactoryBodyDefault
