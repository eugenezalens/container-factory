import React, { FC, memo } from 'react'

import { useDataTestId } from '@/hooks'
import { TypographyFactory } from '@/features/factories'

import { TContainerFactoryTitleDefault as TDefault } from '@/features/factories/ContainerFactory/types'

type TProps = { dataTestId: string } & TDefault

const ContainerFactoryTitleDefault: FC<TProps> = ({ dataTestId, variant, value }) => {
  const getDataTestId = useDataTestId(dataTestId)

  return (
    <TypographyFactory
      dataTestId={getDataTestId()['data-testid']}
      variant={variant}
    >
      {value}
    </TypographyFactory>
  )
}

ContainerFactoryTitleDefault.displayName = 'ContainerFactoryTitleDefault'

export default memo(ContainerFactoryTitleDefault)
