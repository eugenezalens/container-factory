import React, { FC, memo } from 'react'

import { useDataTestId } from '@/hooks'
import { TypographyFactory } from '@/features/factories'
import { createClassName } from '@/utils/helpers'

import { TContainerFactoryFooterAuthor as TAuthor } from '@/features/factories/ContainerFactory/types'

import styles from './ContainerFactoryFooterAuthor.module.css'

type TProps = { dataTestId: string } & TAuthor

const ContainerFactoryFooterAuthor: FC<TProps> = ({ dataTestId, className, name }) => {
  const getDataTestId = useDataTestId(dataTestId)

  const text = `${name} © All rights reserved.`

  return (
    <div
      {...getDataTestId()}
      className={createClassName(styles.wrapper, className)}
    >
      <TypographyFactory
        dataTestId={getDataTestId()['data-testid']}
        variant={{ type: 'description', align: 'center' }}
      >
        {text}
      </TypographyFactory>
    </div>
  )
}

ContainerFactoryFooterAuthor.displayName = 'ContainerFactoryFooterAuthor'

export default memo(ContainerFactoryFooterAuthor)
