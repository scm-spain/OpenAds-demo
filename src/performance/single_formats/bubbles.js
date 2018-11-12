import bubbleCard from '../template/bubbleCardRenderer'
import {addBubbleFactory} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addBubble = addBubbleFactory(openAds)

Promise.all([
  addBubble('bubble_1'),
  addBubble('bubble_2'),
  addBubble('bubble_3')
]).then(([position1, position2, position3]) => {
  const htmlRendered1 = bubbleCard({json: position1.ad.data.native})
  const nativeDOMElement1 = window.document.getElementById(position1.id)
  nativeDOMElement1.innerHTML = htmlRendered1

  console.log(position2, position3)
  const htmlRendered2 = bubbleCard({json: position2.ad.data.native})
  const nativeDOMElement2 = window.document.getElementById(position2.id)
  nativeDOMElement2.innerHTML = htmlRendered2

  const htmlRendered3 = bubbleCard({json: position3.ad.data.native})
  const nativeDOMElement3 = window.document.getElementById(position3.id)
  nativeDOMElement3.innerHTML = htmlRendered3
})
