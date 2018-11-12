import {addSingleVideoFactory} from '../add_position'
import {initOpenAds} from '../init_connector'

const openAds = initOpenAds()

const addSingleVideo = addSingleVideoFactory(openAds)

addSingleVideo('single_video').then(position =>
  openAds.displayPosition({id: position.id})
)
