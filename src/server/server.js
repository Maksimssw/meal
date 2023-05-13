import Http from '../hooks/http.hook'

const server = () => {
  const { loading, error, request } = Http()

  const _key = '&appid=f5380ebdec55111ab3633d9509a44d74'
  const _api = 'https://api.openweathermap.org'



  return { loading, error }
}

export default server