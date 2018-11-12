import OpenAds from '@schibstedspain/openads'
import AppNexusConnector from '@schibstedspain/openads-appnexus'
import bubbleCard from '../template/bubbleCardRenderer'

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
    id: 'bubble1',
    name: 'ad bubbles',
    source: 'AppNexus',
    placement: 'es-fc-wde-home-home-bubble_1',
    segmentation: {
      'es-sch-ads_name_page': 'fotocasaes/home',
      'es-sch-event_name': 'homepage',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'home',
      'aa-sch-page_type': 'home',
      'es-sch-adformat': 'bubble1'
    },
    sizes: [[1, 1]]
  }),
  openAds.addPosition({
    id: 'bubble2',
    name: 'ad bubbles',
    source: 'AppNexus',
    placement: 'es-fc-wde-home-home-bubble_2',
    segmentation: {
      'es-sch-ads_name_page': 'fotocasaes/home',
      'es-sch-event_name': 'homepage',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'home',
      'aa-sch-page_type': 'home',
      'es-sch-adformat': 'bubble2'
    },
    sizes: [[1, 1]]
  }),
  openAds.addPosition({
    id: 'bubble3',
    name: 'ad bubbles',
    source: 'AppNexus',
    placement: 'es-fc-wde-home-home-bubble_3',
    segmentation: {
      'es-sch-ads_name_page': 'fotocasaes/home',
      'es-sch-event_name': 'homepage',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'home',
      'aa-sch-page_type': 'home',
      'es-sch-adformat': 'bubble3'
    },
    sizes: [[1, 1]]
  }),
  openAds.addPosition({
    id: 'single_banner',
    name: 'single banner',
    source: 'AppNexus',
    placement: 'es-fc-wde-on-list-top_2',
    segmentation: {
      'es-sch-ads_name_page': 'fotocasaes/on/parrilla',
      'es-sch-event_name': 'list',
      'aa-sch-country_code': 'es',
      'aa-sch-supply_type': 'wde',
      'es-sch-section': 'tv',
      'aa-sch-page_type': 'list',
      'es-sch-adformat': 'top2'
    },
    sizes: [[728, 90]]
  })
]).then(([position1, position2, position3, position4]) => {
  const htmlRendered1 = bubbleCard({json: position1.ad.data.native})
  const nativeDOMElement1 = window.document.getElementById(position1.id)
  nativeDOMElement1.innerHTML = htmlRendered1

  console.log(position2, position3)
  const htmlRendered2 = bubbleCard({json: position2.ad.data.native})
  const nativeDOMElement2 = window.document.getElementById(position2.id)
  nativeDOMElement2.innerHTML = htmlRendered2

  const htmlRendered3 = bubbleCard({json: position3.ad.data.native})
  const nativeDOMElement3 = window.document.getElementById(position3.id)
  nativeDOMElement3.innerHTML = htmlRendered3

  openAds.displayPosition({id: position4.id})
})
