import util from './util.js'

const urlBatchGenerat = {}

/**
 * 替换Url中数字类型的变量
 * @param {Array} urlArr url数组
 * @param {Object} paramData 参数对象
 */
urlBatchGenerat.replaceParamConfigNumber = function (urlArr, paramData) {
  // 获取基本参数
  let name = `[${paramData.name}]`
  let start = paramData.paramConfigNumber.start
  let endCondition = paramData.paramConfigNumber.endCondition
  let endConditionValue = paramData.paramConfigNumber.endConditionValue
  let action = paramData.paramConfigNumber.action
  let actionRange = paramData.paramConfigNumber.actionRange
  let isZeroPadding = paramData.paramConfigNumber.isZeroPadding

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
urlBatchGenerat.replaceParamConfigLetter = function (urlArr, paramData) {

}

/**
 * 替换Url中时间类型的变量
 * @param {Array} urlArr url数组
 * @param {Object} paramData 参数对象
 */
urlBatchGenerat.replaceParamConfigTime = function (urlArr, paramData) {

}

/**
 * 替换Url中自定义类型的变量
 * @param {Array} urlArr url数组
 * @param {Object} paramData 参数对象
 */
urlBatchGenerat.replaceParamConfigCustomize = function (urlArr, paramData) {

}

export default urlBatchGenerat
