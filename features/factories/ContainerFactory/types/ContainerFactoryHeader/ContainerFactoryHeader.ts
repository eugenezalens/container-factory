import { ReactNode } from 'react'

import { TContainerFactoryTitle } from '@/features/factories/ContainerFactory/types'

export type TContainerFactoryHeaderCustom = {
  type: 'custom'
  render: (data: { dataTestId: string }) => ReactNode
}

export type TContainerFactoryHeaderDefault = {
  type: 'default'
  title?: TContainerFactoryTitle
  className?: string
}

export type TContainerFactoryHeaderHighlighted = {
  type: 'highlighted'
  title?: TContainerFactoryTitle
  className?: string
}

export type TContainerFactoryHeader =
  | TContainerFactoryHeaderCustom
  | TContainerFactoryHeaderDefault
  | TContainerFactoryHeaderHighlighted
