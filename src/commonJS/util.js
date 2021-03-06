const util = {}

/**
 * 加载JS
 * @param {String} path JS路径
 * @param {Function} callback 回调
 */
util.loadJs = (path, callback) => {
  let secScript = document.createElement("script")
  secScript.setAttribute("src", path)
  document.body.insertBefore(secScript, document.body.lastChild)
  secScript.onload = callback
  if (secScript.readyState) {
    // IE
    secScript.onreadystatechange = function () {
      if (secScript.readyState === 'loaded' || secScript.readyState === 'complete') {
        secScript.onreadystatechange = null
        callback()
      }
    }
  } else {
    //其他浏览器
    secScript.onload = callback
  }
}

/**
 * 在一字符串左边填充若干指定字符，使其长度达到指定长度
 * @param {String} srcString 待填充字符串
 * @param {String} c 填充字符
 * @param {Number} length 填充长度
 */
util.leftPad = function (srcString, c, length) {
  if (srcString == null) {
    srcString = ""
  }
  let tLen = srcString.toString().length
  if (tLen >= length) {
    return srcString
  }
  let iMax = length - tLen
  let str = ""
  for (let i = 0; i < iMax; i++) {
    str += c
  }
  str += srcString
  return str
}

/**
 * 获取26个英文大写字母
 */
util.getUppercaseLetters = function () {
  let str = []
  for (let i = 65; i < 91; i++) {
    str.push(String.fromCharCode(i))
  }
  return str
}

/**
 * 获取26个英文小写字母
 */
util.getLowercaseLetters = function () {
  let str = []
  for (let i = 97; i < 123; i++) {
    str.push(String.fromCharCode(i))
  }
  return str
}

/**
 * 字符串第一个字母大写
 * @param {String} param0 待转换字符串
 */
util.toUpperCamelCase = function ([first, ...rest]) {
  return first.toUpperCase() + rest.join('')
}

export default util
