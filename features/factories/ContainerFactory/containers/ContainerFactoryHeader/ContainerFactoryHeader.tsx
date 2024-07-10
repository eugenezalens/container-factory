import React, { FC, memo } from 'react'

import {
  ContainerFactoryHeaderCustom as Custom,
  ContainerFactoryHeaderDefault as Default,
  ContainerFactoryHeaderHighlighted as Highlighted,
} from '@/features/factories/ContainerFactory/containers/ContainerFactoryHeader/components'
import { TContainerFactoryHeader as THeader } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & THeader

const ContainerFactoryHeader: FC<TProps> = (props) => {
  switch (props.type) {
    case 'custom':
      return <Custom {...props} />

    case 'default':
      return <Default {...props} />

    case 'highlighted':
      return <Highlighted {...props} />

    default:
      return <></>
  }
}

ContainerFactoryHeader.displayName = 'ContainerFactoryHeader'

export default memo(ContainerFactoryHeader)
