export default {
  isValid: (value: string) => {
    const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/
    return !value.trim() || !reg.test(value.trim())
  }
}
