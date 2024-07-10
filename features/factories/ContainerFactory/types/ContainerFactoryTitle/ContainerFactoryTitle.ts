import { PropsWithChildren, ReactNode } from 'react'

import { TTypographyFactoryVariant } from '@/features/factories/TypographyFactory/types'

export type TContainerFactoryTitleCustom = {
  type: 'custom'
  render: (data: { dataTestId: string }) => ReactNode
}

export type TContainerFactoryTitleDefault = {
  type: 'default'
  value: PropsWithChildren['children']
  variant: TTypographyFactoryVariant
}

export type TContainerFactoryTitle = TContainerFactoryTitleCustom | TContainerFactoryTitleDefault
