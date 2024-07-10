import React, { FC, memo } from 'react'

import { ContainerFactoryFooterAuthor as Author } from '@/features/factories/ContainerFactory/containers/ContainerFactoryFooter/components'
import { TContainerFactoryFooter as TFooter } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TFooter

const ContainerFactoryFooter: FC<TProps> = (props) => {
  switch (props.type) {
    case 'author':
      return <Author {...props} />

    default:
      return <></>
  }
}

ContainerFactoryFooter.displayName = 'ContainerFactoryFooter'

export default memo(ContainerFactoryFooter)
