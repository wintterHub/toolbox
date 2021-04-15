import { Message, MessageBox } from 'element-ui'

export default { getDeleteMessage }

// 删除翻译腔
const translationToneDelete = [
  "噢，删得不错，我的老伙计。",
  "噢，我的上帝，你还想删点什么？",
  "嘿，老伙计，又来删东西了！",
  "噢，我可怜的用户，你在删什么呢？",
  "我敢打赌，你一定想删点什么，我向上帝保证！",
  "噢，我简直不敢相信，你竟然点击了删除！",
  "下此再有人点删除，我一定用皮靴狠狠地踢他的屁股！",
  "我跟你打赌，你不会想去点第二次。",
]

const over996 = "你的手速已打败了全国 99.6% 的用户，获得纯金删除按钮一个"

let time = new Date().getTime()

// 随机获取一条删除翻译腔
function getDeleteMessage() {
  Message.closeAll()
  let isGoldDelete = localStorage.getItem("goldDelete")
  if (isGoldDelete != "1" && new Date().getTime() - time < 200) {
    time = new Date().getTime()
    MessageBox.confirm(over996, '达成成就', {
      confirmButtonText: '确定',
      type: 'success',
      center: true,
      closeOnClickModal: false,
      showCancelButton: false
    }).then(() => { }).catch(() => { })
    localStorage.setItem("goldDelete", "1")
    return true
  } else {
    let random = Math.floor(Math.random() * (translationToneDelete.length))
    time = new Date().getTime()
    if (isGoldDelete) {
      Message.warning(translationToneDelete[random])
    } else {
      Message.info(translationToneDelete[random])
    }
  }
}


