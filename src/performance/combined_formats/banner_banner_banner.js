import {addSingleBannerFactory} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addSingleBanner = addSingleBannerFactory(openAds)

Promise.all([
  addSingleBanner('banner1'),
  addSingleBanner('banner2'),
  addSingleBanner('banner3')
]).then(([position1, position2, position3]) => {
  openAds.displayPosition({id: position1.id})
  openAds.displayPosition({id: position2.id})
  openAds.displayPosition({id: position3.id})
})
