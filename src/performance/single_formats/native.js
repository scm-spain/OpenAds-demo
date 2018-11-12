import nativeRenderer from '../template/nativeRenderer'
import {addSingleNativeFactory} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addSingleNative = addSingleNativeFactory(openAds)

addSingleNative('single_native').then(position => {
  const htmlRendered = nativeRenderer({json: position.ad.data.native})
  const nativeDOMElement = window.document.getElementById(position.id)
  nativeDOMElement.innerHTML = htmlRendered
})
