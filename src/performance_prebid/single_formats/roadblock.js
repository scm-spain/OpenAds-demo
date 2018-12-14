import {addRoadBlockFactory} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addRoadBlock = addRoadBlockFactory(openAds)

addRoadBlock('PubTop1').then(position =>
  openAds.displayPosition({id: position.id})
)
