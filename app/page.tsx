import Image from 'next/image'

import { ContainerFactory } from '@/features/factories'

import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Image
          width={50}
          height={50}
          src={'/assets/icons/logo.png'}
          alt={'logo'}
        />

        <h1>@ez</h1>
      </header>

      <main className={styles.main}>
        <ContainerFactory
          dataTestId={'sample-default'}
          size={'large'}
          header={{
            type: 'default',
            title: {
              type: 'default',
              value: 'Default Title',
              variant: {
                type: 'title',
              },
            },
          }}
          body={{
            type: 'default',
          }}
          footer={{
            type: 'author',
            name: '@eugenezalens',
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse expedita, quisquam! Aliquid asperiores atque
          aut consequuntur cum dolorem doloremque doloribus ducimus earum minima minus, odio qui quo reiciendis tenetur
          voluptatum.
        </ContainerFactory>

        <ContainerFactory
          dataTestId={'sample-custom'}
          size={'medium'}
          header={{
            type: 'highlighted',
            title: {
              type: 'custom',
              render: ({ dataTestId }) => (
                <h2
                  data-testid={dataTestId}
                  className={styles.customTitle}
                >
                  Your Custom Title
                </h2>
              ),
            },
          }}
          body={{
            type: 'default',
          }}
          footer={{
            type: 'author',
            name: '@yourname',
          }}
        >
          [You can insert any kind of data here: components, text, etc.]
        </ContainerFactory>
      </main>

      <footer className={styles.footer}>
        <h3 className={styles.credits}>@eugenezalens © All rights reserved.</h3>
      </footer>
    </>
  )
}
