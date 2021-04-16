import Vue from 'vue'
// 全局时间过滤器
Vue.filter('dateFormat', originVal => {
  if (originVal) {
    const dt = new Date(originVal)

    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')

    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
  }
  return '---'
})

Vue.filter('dateFilter', val => {
  let str = val.toString()
  return str.replace(',', '~')
})
