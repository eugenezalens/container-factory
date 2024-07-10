import React, { FC, PropsWithChildren, memo } from 'react'

import { useDataTestId } from '@/hooks'

import {
  TypographyFactoryVariantTitle as VariantTitle,
  TypographyFactoryVariantDescription as VariantDescription,
} from '@/features/factories/TypographyFactory/components'
import { TTypographyFactoryVariant as TVariant } from '@/features/factories/TypographyFactory/types'

interface IProps {
  dataTestId: string
  variant: TVariant
}

const TypographyFactory: FC<PropsWithChildren<IProps>> = ({ dataTestId, variant, children }) => {
  const getDataTestId = useDataTestId(`${dataTestId}__typography-factory`)

  switch (variant.type) {
    case 'title':
      return (
        <VariantTitle
          {...variant}
          dateTestId={getDataTestId('title')['data-testid']}
        >
          {children}
        </VariantTitle>
      )

    case 'description':
      return (
        <VariantDescription
          {...variant}
          dateTestId={getDataTestId('description')['data-testid']}
        >
          {children}
        </VariantDescription>
      )

    default:
      return <span {...getDataTestId()}>{children}</span>
  }
}

TypographyFactory.displayName = 'TypographyFactory'

export default memo(TypographyFactory)
