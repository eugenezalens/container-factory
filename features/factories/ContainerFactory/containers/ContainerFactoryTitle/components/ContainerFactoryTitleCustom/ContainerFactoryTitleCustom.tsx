import React, { FC, memo } from 'react'

import { TContainerFactoryTitleCustom as TCustom } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TCustom

const ContainerFactoryTitleCustom: FC<TProps> = ({ dataTestId, render }) => {
  return <>{render({ dataTestId })}</>
}

ContainerFactoryTitleCustom.displayName = 'ContainerFactoryTitleCustom'

export default memo(ContainerFactoryTitleCustom)
