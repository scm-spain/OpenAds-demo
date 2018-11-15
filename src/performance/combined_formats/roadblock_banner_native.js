import nativeRenderer from '../template/nativeRenderer'
import {
  addRoadBlockFactory,
  addSingleBannerFactory,
  addSingleNativeFactory
} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addSingleBanner = addSingleBannerFactory(openAds)
const addSingleNative = addSingleNativeFactory(openAds)
const addRoadBlock = addRoadBlockFactory(openAds)

Promise.all([
  addRoadBlock('PubTop1'),
  addSingleBanner('single_banner'),
  addSingleNative('single_native')
]).then(([position1, position2, position3]) => {
  openAds.displayPosition({id: position1.id})
  openAds.displayPosition({id: position2.id})

  const htmlRendered = nativeRenderer({json: position3.ad.data.native})
  const nativeDOMElement = window.document.getElementById(position3.id)
  nativeDOMElement.innerHTML = htmlRendered
})
