import fetch from './fetch.js'

const issue = params => {
  return fetch({
    url: '/api/staff',
    method: 'post',
    data: params
  })
}
const apiList = {
  staff
}

export default apiList
