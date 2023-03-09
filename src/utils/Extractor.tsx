interface IURLExtract {
  url?: string
}
function URLExtract({url='https://github.com'}: IURLExtract) {
  const retrievedURL = url.split('/')
  return( <>{retrievedURL[2]}</>)
}

export {URLExtract}