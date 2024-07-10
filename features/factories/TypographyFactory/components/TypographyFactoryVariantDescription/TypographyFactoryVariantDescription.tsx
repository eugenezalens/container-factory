import React, { FC, PropsWithChildren, memo, useMemo } from 'react'

import { useDataTestId } from '@/hooks'
import { createClassName } from '@/utils/helpers'

import { TTypographyFactoryVariantDescription as TDescription } from '@/features/factories/TypographyFactory/types'

import styles from './TypographyFactoryVariantDescription.module.css'

type TProps = { dateTestId: string } & TDescription

const TypographyFactoryVariantDescription: FC<PropsWithChildren<TProps>> = ({ dateTestId, align, children }) => {
  const getDataTestId = useDataTestId(dateTestId)

  const alignClassName = useMemo(() => {
    switch (align) {
      case 'center':
        return styles['ta_center']

      default:
    }
  }, [align])

  return (
    <div
      {...getDataTestId('wrapper')}
      className={createClassName(alignClassName)}
    >
      <span
        {...getDataTestId()}
        className={styles.title}
      >
        {children}
      </span>
    </div>
  )
}

TypographyFactoryVariantDescription.displayName = 'TypographyFactoryVariantDescription'

export default memo(TypographyFactoryVariantDescription)
