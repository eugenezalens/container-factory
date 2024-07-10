import { useCallback } from 'react'

const useDataTestId: IUseDataTestId = (primaryId) => {
  return useCallback<IGetDataTestId>(
    (secondaryId) => {
      return {
        'data-testid': secondaryId ? `${primaryId}__${secondaryId}` : primaryId,
      }
    },
    [primaryId],
  )
}

interface IDataTestId {
  'data-testid': string
}

interface IGetDataTestId {
  (secondaryId?: string): IDataTestId
}

interface IUseDataTestId {
  (primaryId: string): IGetDataTestId
}

export default useDataTestId
