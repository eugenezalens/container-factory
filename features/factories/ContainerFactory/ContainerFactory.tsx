import React, { FC, PropsWithChildren, memo } from 'react'

import { useDataTestId } from '@/hooks'
import { createClassName } from '@/utils/helpers'

import {
  ContainerFactoryHeader as Header,
  ContainerFactoryBody as Body,
  ContainerFactoryFooter as Footer,
} from '@/features/factories/ContainerFactory/containers'
import {
  TContainerFactoryHeader as THeader,
  TContainerFactoryBody as TBody,
  TContainerFactoryFooter as TFooter,
  TContainerFactorySize as TSize,
} from '@/features/factories/ContainerFactory/types'

import styles from './ContainerFactory.module.css'

interface IProps {
  dataTestId: string
  size: TSize
  header?: THeader
  body?: TBody
  footer?: TFooter
}

const ContainerFactory: FC<PropsWithChildren<IProps>> = ({ dataTestId, size, header, body, footer, children }) => {
  const getDataTestId = useDataTestId(`${dataTestId}__container-factory`)

  return (
    <div
      {...getDataTestId()}
      className={createClassName(styles.wrapper, styles[size])}
    >
      {header ? (
        <Header
          {...header}
          dataTestId={getDataTestId('header')['data-testid']}
        />
      ) : null}

      {body ? (
        <Body
          {...body}
          dataTestId={getDataTestId('body')['data-testid']}
        >
          {children}
        </Body>
      ) : (
        <div {...getDataTestId('body')}>{children}</div>
      )}

      {footer ? (
        <Footer
          {...footer}
          dataTestId={getDataTestId('footer')['data-testid']}
        />
      ) : null}
    </div>
  )
}

ContainerFactory.displayName = 'ContainerFactory'

export default memo(ContainerFactory)
