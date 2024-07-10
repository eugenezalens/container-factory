import React, { FC, PropsWithChildren, memo } from 'react'

import { TContainerFactoryBodyCustom as TCustom } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TCustom

const ContainerFactoryBodyCustom: FC<PropsWithChildren<TProps>> = ({ dataTestId, render, children }) => {
  return <>{render({ dataTestId, children })}</>
}

ContainerFactoryBodyCustom.displayName = 'ContainerFactoryBodyCustom'

export default memo(ContainerFactoryBodyCustom)
