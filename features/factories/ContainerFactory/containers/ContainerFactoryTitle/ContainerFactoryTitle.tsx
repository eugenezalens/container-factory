import React, { FC, memo } from 'react'

import {
  ContainerFactoryTitleCustom as Custom,
  ContainerFactoryTitleDefault as Default,
} from '@/features/factories/ContainerFactory/containers/ContainerFactoryTitle/components'
import { TContainerFactoryTitle as TTitle } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TTitle

const ContainerFactoryTitle: FC<TProps> = (props) => {
  switch (props.type) {
    case 'custom':
      return <Custom {...props} />

    case 'default':
      return <Default {...props} />

    default:
      return <></>
  }
}

ContainerFactoryTitle.displayName = 'ContainerFactoryTitle'

export default memo(ContainerFactoryTitle)
