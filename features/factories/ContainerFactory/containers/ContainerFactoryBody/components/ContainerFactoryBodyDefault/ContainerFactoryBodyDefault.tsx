import React, { FC, PropsWithChildren, memo } from 'react'

import { useDataTestId } from '@/hooks'

import { TContainerFactoryBodyDefault as TDefault } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TDefault

const ContainerFactoryBodyDefault: FC<PropsWithChildren<TProps>> = ({ dataTestId, className, children }) => {
  const getDataTestId = useDataTestId(dataTestId)

  return (
    <div
      {...getDataTestId()}
      className={className}
    >
      {children}
    </div>
  )
}

ContainerFactoryBodyDefault.displayName = 'ContainerFactoryBodyDefault'

export default memo(ContainerFactoryBodyDefault)
