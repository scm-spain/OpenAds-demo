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
    id: 'PubTop1',
    name: 'roadblock ad',
    source: 'AppNexus',
    placement: 'es-cn-wde-accesorios-list-top_1',
    segmentation: {
      'es-sch-ads_name_page': 'cochesnet/accesorios/home',
      'es-sch-event_name': 'list',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'accesorios',
      'aa-sch-page_type': 'list',
      'es-sch-adformat': 'top1'
    },
    sizes: [[980, 90]]
  })
  .then(position => openAds.displayPosition({id: position.id}))
