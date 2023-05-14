import Http from '../hooks/http.hook'

const server = () => {
  const { loading, error, request } = Http()

  const _api = 'https://shop-8ed07-default-rtdb.firebaseio.com/meals.json'

  const requestMeals = async () => {
    const res = await request(_api)
    const arr = []

    for (let key in res) {
      arr.push(res[key])
    }

    return arr
  }

  const sendOrder = (user, order) => {
    request('https://shop-8ed07-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: user,
        order: order
      })
    })
  }

  return { loading, error, requestMeals, sendOrder }
}

export default server