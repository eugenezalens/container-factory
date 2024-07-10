import React, { FC, memo } from 'react'

import { useDataTestId } from '@/hooks'

import { ContainerFactoryTitle as Title } from '@/features/factories/ContainerFactory/containers'
import { TContainerFactoryHeaderHighlighted as Highlighted } from '@/features/factories/ContainerFactory/types'

import styles from './ContainerFactoryHeaderHighlighted.module.css'

type TProps = { dataTestId: string } & Highlighted

const ContainerFactoryHeaderHighlighted: FC<TProps> = ({ dataTestId, title }) => {
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

ContainerFactoryHeaderHighlighted.displayName = 'ContainerFactoryHeaderHighlighted'

export default memo(ContainerFactoryHeaderHighlighted)
