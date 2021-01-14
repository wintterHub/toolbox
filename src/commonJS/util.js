const util = {}

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

export default util
