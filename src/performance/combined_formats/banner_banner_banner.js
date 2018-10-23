import OpenAds from '@schibstedspain/openads'
import AppNexusConnector from '@schibstedspain/openads-appnexus'

const appNexusConnector = AppNexusConnector.init({
  config: {
    member: 3397
  }
})

const openAds = OpenAds.init({config:{
    Sources: {
      AppNexus: appNexusConnector
    }
  }})


Promise.all([
  openAds.addPosition({
    id: 'banner1',
    name: 'single banner',
    source: 'AppNexus',
      placement: 'es-cn-wde-accesorios-list-top_2',
      segmentation: {
          'es-sch-ads_name_page': 'cochesnet/accesorios/home',
          'es-sch-event_name': 'list',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wde',
          'es-sch-section': 'accesorios',
          'aa-sch-page_type': 'list',
          'es-sch-adformat': 'top2'
      },
      sizes: [[728, 90]]
  }),
  openAds.addPosition({
    id: 'banner2',
    name: 'single banner',
    source: 'AppNexus',
      placement: 'es-cn-wde-accesorios-list-top_2',
      segmentation: {
          'es-sch-ads_name_page': 'cochesnet/accesorios/home',
          'es-sch-event_name': 'list',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wde',
          'es-sch-section': 'accesorios',
          'aa-sch-page_type': 'list',
          'es-sch-adformat': 'top2'
      },
      sizes: [[728, 90]]
  }),
  openAds.addPosition({
    id: 'banner3',
    name: 'single banner',
    source: 'AppNexus',
      placement: 'es-cn-wde-accesorios-list-top_2',
      segmentation: {
          'es-sch-ads_name_page': 'cochesnet/accesorios/home',
          'es-sch-event_name': 'list',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wde',
          'es-sch-section': 'accesorios',
          'aa-sch-page_type': 'list',
          'es-sch-adformat': 'top2'
      },
      sizes: [[728, 90]]
  })
])
  .then(([position1,position2,position3]) => {
    openAds.displayPosition({id: position1.id})
    openAds.displayPosition({id: position2.id})
    openAds.displayPosition({id: position3.id})
  })
