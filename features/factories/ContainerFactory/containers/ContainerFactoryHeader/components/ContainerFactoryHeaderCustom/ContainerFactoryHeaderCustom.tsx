import React, { FC, memo } from 'react'

import { TContainerFactoryHeaderCustom as TCustom } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TCustom

const ContainerFactoryHeaderCustom: FC<TProps> = ({ dataTestId, render }) => {
  return <>{render({ dataTestId })}</>
}

ContainerFactoryHeaderCustom.displayName = 'ContainerFactoryHeaderCustom'

export default memo(ContainerFactoryHeaderCustom)
