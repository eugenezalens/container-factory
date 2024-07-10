import React, { FC, PropsWithChildren, memo } from 'react'

import {
  ContainerFactoryBodyCustom as Custom,
  ContainerFactoryBodyDefault as Default,
} from '@/features/factories/ContainerFactory/containers/ContainerFactoryBody/components'
import { TContainerFactoryBody as TBody } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TBody

const ContainerFactoryBody: FC<PropsWithChildren<TProps>> = (props) => {
  switch (props.type) {
    case 'custom':
      return <Custom {...props} />

    case 'default':
      return <Default {...props} />

    default:
      return <></>
  }
}

ContainerFactoryBody.displayName = 'ContainerFactoryBody'

export default memo(ContainerFactoryBody)
