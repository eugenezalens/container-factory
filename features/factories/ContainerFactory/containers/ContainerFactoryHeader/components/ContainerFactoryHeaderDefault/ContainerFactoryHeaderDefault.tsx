import React, { FC, memo } from 'react'

import { useDataTestId } from '@/hooks'

import { ContainerFactoryTitle as Title } from '@/features/factories/ContainerFactory/containers'
import { TContainerFactoryHeaderDefault as TDefault } from '@/features/factories/ContainerFactory/types'

import styles from './ContainerFactoryHeaderDefault.module.css'

type TProps = { dataTestId: string } & TDefault

const ContainerFactoryHeaderDefault: FC<TProps> = ({ dataTestId, title }) => {
  const getDataTestId = useDataTestId(dataTestId)

  return (
    <div
      {...getDataTestId()}
      className={styles.wrapper}
    >
      {title ? (
        <Title
          dataTestId={getDataTestId('title')['data-testid']}
          {...title}
        />
      ) : null}
    </div>
  )
}

ContainerFactoryHeaderDefault.displayName = 'ContainerFactoryHeaderDefault'

export default memo(ContainerFactoryHeaderDefault)
