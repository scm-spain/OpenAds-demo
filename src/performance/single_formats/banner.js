import {addSingleBannerFactory} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addSingleBanner = addSingleBannerFactory(openAds)

addSingleBanner('single_banner').then(position =>
  openAds.displayPosition({id: position.id})
)
