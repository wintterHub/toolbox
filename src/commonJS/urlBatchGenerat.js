import util from './util.js'

/**
 * 替换Url中数字类型的变量
 * @param {Array} urlArr url数组
 * @param {Object} paramData 参数对象
 */
const replaceParamConfigNumber = function (urlArr, paramData) {
  // 获取基本参数
  let name = `[${paramData.name}]` // 参数名
  let start = paramData.paramConfigNumber.start // 开始值
  let endCondition = paramData.paramConfigNumber.endCondition // 结束条件 endValue-结束值、count-项数
  let endConditionValue = paramData.paramConfigNumber.endConditionValue // 结束条件的值
  let action = paramData.paramConfigNumber.action // 每次动作 up-递增、down-递减
  let actionRange = paramData.paramConfigNumber.actionRange //  每次动作的值
  let isZeroPadding = paramData.paramConfigNumber.isZeroPadding // 补零

  // 根据结束条件，计算结束值
  let end = (() => {
    if (endCondition === "count") {
      return action === "up"
        ? start + endConditionValue * actionRange
        : start - endConditionValue * actionRange
    } else {
      return action === "up"
        ? endConditionValue + 1
        : endConditionValue - 1
    }
  })()

  // 获取最大结果值，用于判断最终是否需要补零
  let maxNum = (() => {
    let arrNum = []
    for (
      let i = start;
      action === "up" ? i < end : i > end;
      i += action === "up" ? actionRange : -actionRange
    ) {
      arrNum.push(i)
    }
    return Math.max(...arrNum)
  })()

  // 遍历urlArr，替换参数占位符
  let result = []
  for (
    let i = start;
    action === "up" ? i < end : i > end;
    i += action === "up" ? actionRange : -actionRange
  ) {
    urlArr.forEach(url => {
      if (isZeroPadding) {
        // 补零
        let len = maxNum.toString().length
        let leftPadI = util.leftPad(i, "0", len)
        result.push(url.replace(name, leftPadI))
      } else {
        // 不补零
        result.push(url.replace(name, i))
      }
    })
  }
  return result
}

/**
 * 替换Url中字母类型的变量
 * @param {Array} urlArr url数组
 * @param {Object} paramData 参数对象
 */
const replaceParamConfigLetter = function (urlArr, paramData) {
  // 获取基本参数
  let name = `[${paramData.name}]` // 参数名
  let lowercase = paramData.paramConfigNumber.lowercase // 开启小写
  let lowercaseStart = paramData.paramConfigNumber.lowercaseStart // 小写起始字母
  let lowercaseEnd = paramData.paramConfigNumber.lowercaseEnd // 小写结束字母
  let uppercase = paramData.paramConfigNumber.uppercase // 开启大写
  let uppercaseStart = paramData.paramConfigNumber.uppercaseStart // 大写起始字母
  let uppercaseStart = paramData.paramConfigNumber.uppercaseStart // 大写结束字母

  // TODO 逻辑待完成
}

/**
 * 替换Url中时间类型的变量
 * @param {Array} urlArr url数组
 * @param {Object} paramData 参数对象
 */
const replaceParamConfigTime = function (urlArr, paramData) {

}

/**
 * 替换Url中自定义类型的变量
 * @param {Array} urlArr url数组
 * @param {Object} paramData 参数对象
 */
const replaceParamConfigCustomize = function (urlArr, paramData) {

}

export default { replaceParamConfigNumber, replaceParamConfigLetter, replaceParamConfigTime, replaceParamConfigCustomize }
