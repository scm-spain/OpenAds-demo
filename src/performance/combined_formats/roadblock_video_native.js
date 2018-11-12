import nativeRenderer from '../template/nativeRenderer'
import {
  addRoadBlockFactory,
  addSingleNativeFactory,
  addSingleVideoFactory
} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addSingleNative = addSingleNativeFactory(openAds)
const addRoadBlock = addRoadBlockFactory(openAds)
const addSingleVideo = addSingleVideoFactory(openAds)

Promise.all([
  addRoadBlock('PubTop1'),
  addSingleVideo('single_video'),
  addSingleNative('single_native')
]).then(([position1, position2, position3]) => {
  openAds.displayPosition({id: position1.id})
  openAds.displayPosition({id: position2.id})

  const htmlRendered = nativeRenderer({json: position3.ad.data.native})
  const nativeDOMElement = window.document.getElementById(position3.id)
  nativeDOMElement.innerHTML = htmlRendered
})
