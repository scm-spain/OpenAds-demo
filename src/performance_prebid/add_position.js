export const addSingleBannerFactory = openAds => id =>
  openAds.addPosition({
    id: id,
    name: 'single banner',
    specification: {
      source: 'AppNexus',
      appnexus: {
        targetId: id,
        invCode: 'es-fc-wde-on-list-top_2',
        keywords: {
          'es-sch-ads_name_page': 'fotocasaes/on/parrilla',
          'es-sch-event_name': 'list',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wde',
          'es-sch-section': 'tv',
          'aa-sch-page_type': 'list',
          'es-sch-adformat': 'top2'
        },
        sizes: [[728, 90]]
      },
      prebid: {
        code: 'id',
        mediaTypes: {
          banner: {
            sizes: [[728, 90]]
          }
        },
        bids: [
          {
            bidder: 'criteo',
            params: {
              zoneId: '779160'
            }
          },
          {
            bidder: 'rubicon',
            params: {
              accountId: '15052',
              siteId: '88944',
              zoneId: '419134'
            }
          }
        ]
      }
    }
  })

export const addSingleVideoFactory = openAds => id =>
  openAds.addPosition({
    id: id,
    name: 'ad single_video',
    specification: {
      source: 'AppNexus',
      appnexus: {
        targetId: id,
        invCode: 'es-fc-wde-tv-list-top_2',
        keywords: {
          'es-sch-ads_name_page': 'fotocasaes/tv/parrilla',
          'es-sch-event_name': 'list',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wde',
          'es-sch-section': 'km0',
          'aa-sch-page_type': 'home',
          'es-sch-adformat': 'top2'
        },
        sizes: [[1, 1]]
      }
    }
  })

export const addBubbleFactory = openAds => code => {
  const id = code.replace('_', '')
  return openAds.addPosition({
    id: id,
    name: 'ad bubbles',
    specification: {
      source: 'AppNexus',
      appnexus: {
        targetId: id,
        invCode: `es-fc-wde-home-home-${code}`,
        keywords: {
          'es-sch-ads_name_page': 'fotocasaes/home',
          'es-sch-event_name': 'homepage',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wde',
          'es-sch-section': 'home',
          'aa-sch-page_type': 'home',
          'es-sch-adformat': id
        }
      }
    },
    sizes: [[1, 1]]
  })
}

export const addSingleNativeFactory = openAds => id =>
  openAds.addPosition({
    id: id,
    name: 'ad single_native',
    specification: {
      source: 'AppNexus',
      appnexus: {
        targetId: id,
        invCode: 'es-fc-wde-tv-list-native',
        keywords: {
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
      }
    }
  })

export const addRoadBlockFactory = openAds => id =>
  openAds.addPosition({
    id: id,
    name: 'roadblock ad',
    specification: {
      source: 'AppNexus',
      appnexus: {
        targetId: id,
        invCode: 'es-fc-wde-tv-list-top_1',
        keywords: {
          'es-sch-ads_name_page': 'fotocasaes/tv/parrilla',
          'es-sch-event_name': 'list',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wde',
          'es-sch-section': 'accesorios',
          'aa-sch-page_type': 'list',
          'es-sch-adformat': 'top1'
        },
        sizes: [[980, 90]]
      }
    }
  })
