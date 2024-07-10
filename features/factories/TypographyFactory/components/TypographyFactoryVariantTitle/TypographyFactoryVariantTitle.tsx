import React, { FC, PropsWithChildren, memo } from 'react'

import { useDataTestId } from '@/hooks'

import { TTypographyFactoryVariantTitle as TTitle } from '@/features/factories/TypographyFactory/types'

import styles from './TypographyFactoryVariantTitle.module.css'

type TProps = { dateTestId: string } & TTitle

const TypographyFactoryVariantTitle: FC<PropsWithChildren<TProps>> = ({ dateTestId, children }) => {
  const getDataTestId = useDataTestId(dateTestId)

  return (
    <div {...getDataTestId('wrapper')}>
      <span
        {...getDataTestId()}
        className={styles.title}
      >
        {children}
      </span>
    </div>
  )
}

TypographyFactoryVariantTitle.displayName = 'TypographyFactoryVariantTitle'

export default memo(TypographyFactoryVariantTitle)
