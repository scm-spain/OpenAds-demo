import OpenAds from '@schibstedspain/openads'
import AppNexusConnector from '@schibstedspain/openads-appnexus'
import nativeRenderer from "../template/nativeRenderer";

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

openAds.addPosition({
  id: 'single_native',
  name: 'ad single_native',
  source: 'AppNexus',
  placement: 'es-ma-wde-realestate-list-native',
  segmentation: {
    'es-sch-ads_name_page': 'milanuncios/parrilla',
    'es-sch-event_name': 'list',
    'aa-sch-country_code': 'es',
    'aa-sch-supply_type': 'wde',
    'es-sch-section': 'realestate',
    'aa-sch-page_type': 'list',
    'es-sch-adformat': 'native'
  },
  sizes: [[1, 1]],
  native: {
      "title": {
          "required": true,
          "max_length": 35
      },
      "body": {
          "required": true,
          "max_length": 1000
      },
      "image": {
          "required": false
      },
      "icon": {
          "required": false
      },
      "clickUrl": {
          "required": true
      }
  }
})
  .then(position => {
    const htmlRendered = nativeRenderer({json: position.ad.data.native})
    const nativeDOMElement = window.document.getElementById(position.id)
    nativeDOMElement.innerHTML = htmlRendered
  })
