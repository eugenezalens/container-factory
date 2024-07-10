export type TTypographyFactoryVariantTitle = {
  type: 'title'
  className?: string
}

export type TTypographyFactoryVariantDescription = {
  type: 'description'
  align?: 'center'
  className?: string
}

export type TTypographyFactoryVariant = TTypographyFactoryVariantTitle | TTypographyFactoryVariantDescription
