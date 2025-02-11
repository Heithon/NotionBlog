export function checkContainHttp(str) {
  // 检查字符串是否包含http
  if (str.includes('http:') || str.includes('https:')) {
    // 如果包含，找到http的位置
    return str.indexOf('http') > -1
  } else {
    // 不包含
    return false
  }
}

/**
 * 保存深色模式
 * @param newTheme
 */
export const saveDarkModeToCookies = newTheme => {
  cookie.save('darkMode', newTheme, { path: '/' })
}
