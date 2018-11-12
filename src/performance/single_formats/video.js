import OpenAds from '@schibstedspain/openads'
import AppNexusConnector from '@schibstedspain/openads-appnexus'

const appNexusConnector = AppNexusConnector.init({
  config: {
    member: 3397
  }
})

const openAds = OpenAds.init({
  config: {
    Sources: {
      AppNexus: appNexusConnector
    }
  }
})

openAds
  .addPosition({
    id: 'single_video',
    name: 'ad single_video',
    source: 'AppNexus',
    placement: 'es-cn-wde-km0-list-top_2',
    segmentation: {
      'es-sch-ads_name_page': 'cochesnet/km0/home',
      'es-sch-event_name': 'list',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'km0',
      'aa-sch-page_type': 'home',
      'es-sch-adformat': 'top2'
    },
    sizes: [[1, 1]]
  })
  .then(position => openAds.displayPosition({id: position.id}))
