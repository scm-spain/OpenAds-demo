import bubbleCard from '../template/bubbleCardRenderer'
import nativeRenderer from '../template/nativeRenderer'
import {
  addBubbleFactory,
  addSingleBannerFactory,
  addSingleNativeFactory
} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addSingleBanner = addSingleBannerFactory(openAds)
const addBubble = addBubbleFactory(openAds)
const addSingleNative = addSingleNativeFactory(openAds)

Promise.all([
  addBubble('bubble_1'),
  addBubble('bubble_2'),
  addBubble('bubble_3'),
  addSingleBanner('single_banner'),
  addSingleNative('single_native')
]).then(([position1, position2, position3, position4, position5]) => {
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

  openAds.displayPosition({id: position4.id})

  const htmlRendered = nativeRenderer({json: position5.ad.data.native})
  const nativeDOMElement = window.document.getElementById(position5.id)
  nativeDOMElement.innerHTML = htmlRendered
})
