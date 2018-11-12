import OpenAds from '@schibstedspain/openads'
import AppNexusConnector from '@schibstedspain/openads-appnexus'
import nativeRenderer from '../template/nativeRenderer'

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

Promise.all([
  openAds.addPosition({
    id: 'PubTop1',
    name: 'roadblock ad',
    source: 'AppNexus',
    placement: 'es-fc-wde-tv-list-top_1',
    segmentation: {
      'es-sch-ads_name_page': 'fotocasaes/tv/parrilla',
      'es-sch-event_name': 'list',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'accesorios',
      'aa-sch-page_type': 'list',
      'es-sch-adformat': 'top1'
    },
    sizes: [[980, 90]]
  }),
  openAds.addPosition({
    id: 'single_video',
    name: 'ad single_video',
    source: 'AppNexus',
    placement: 'es-fc-wde-tv-list-top_2',
    segmentation: {
      'es-sch-ads_name_page': 'fotocasaes/tv/parrilla',
      'es-sch-event_name': 'list',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'km0',
      'aa-sch-page_type': 'home',
      'es-sch-adformat': 'top2'
    },
    sizes: [[1, 1]]
  }),
  openAds.addPosition({
    id: 'single_native',
    name: 'ad single_native',
    source: 'AppNexus',
    placement: 'es-fc-wde-tv-list-native',
    segmentation: {
      'es-sch-ads_name_page': 'fotocasaes/tv/parrilla',
      'es-sch-event_name': 'list',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'realestate',
      'aa-sch-page_type': 'list',
      'es-sch-adformat': 'native'
    },
    sizes: [[1, 1]],
    native: {
      title: {
        required: true,
        max_length: 35
      },
      body: {
        required: true,
        max_length: 1000
      },
      image: {
        required: false
      },
      icon: {
        required: false
      },
      clickUrl: {
        required: true
      }
    }
  })
]).then(([position1, position2, position3]) => {
  openAds.displayPosition({id: position1.id})
  openAds.displayPosition({id: position2.id})

  const htmlRendered = nativeRenderer({json: position3.ad.data.native})
  const nativeDOMElement = window.document.getElementById(position3.id)
  nativeDOMElement.innerHTML = htmlRendered
})
