const createClassName = (...classNameList: (string | undefined)[]): string => {
  const filteredList = classNameList.filter((className) => className)

  return filteredList.join(' ')
}

export default createClassName
