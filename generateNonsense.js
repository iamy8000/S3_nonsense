function nonsenseGenerator(option) {
  const targets = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家',
  }

  const tasks = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }

  const phrases = ['很簡單', '很容易', '很快', '很正常']

  //define target
  const targetIndex = Object.values(option)
  const target = targets[targetIndex]

  //狀況排除
  if (targetIndex.length === 0) {
    return '請選擇一項職業'
  } else {
    //generate a task
    const task = randomGenerator(tasks[targetIndex])

    //generate a phrase
    const phrase = randomGenerator(phrases)

    //generate a nonsense sentence
    const nonsense = `身為一個${target}，${task}，${phrase}吧！`
    return nonsense
  }
}

module.exports = nonsenseGenerator

function randomGenerator(options) {
  let index = Math.floor(Math.random() * options.length)
  return options[index]
}