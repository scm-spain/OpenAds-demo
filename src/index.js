import OpenAds from '@schibstedspain/openads'
import AppNexusConnector from '@schibstedspain/openads-appnexus'

const appNexusConnector = AppNexusConnector.init({
  config: {
    pageOpts: {
      member: 3296
    }
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
    id: 'ad1',
    name: 'med-rect',
    specification: {
      source: 'AppNexus',
      appnexus: {
        targetId: 'ad1',
        invCode: 'es-cn-wph-ocasion-list-x_65',
        keywords: {
          'es-sch-ads_name_page': 'cochesnet/ocasion/listado',
          'es-sch-event_name': 'list',
          'aa-sch-country_code': 'es',
          'aa-sch-supply_type': 'wph',
          'es-sch-section': 'ocasion',
          'aa-sch-page_type': 'list',
          'es-sch-adformat': 'x65'
        },
        sizes: [[300, 250], [320, 250]]
      },
      prebid: {
        code: 'ad1',
        mediaTypes: {
          banner: {
            sizes: [[300, 250], [320, 250]]
          }
        },
        bids: [
          {
            bidder: 'criteo',
            params: {
              zoneId: '779159'
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
  .then(position => openAds.displayPosition({id: position.id}))

// openAds
//   .addPosition({
//     id: 'ad2',
//     name: 'med-rect',
//     specification: {
//       source: 'AppNexus',
//       appnexus: {
//         targetId: 'ad2',
//         invCode: 'es-cn-wph-ocasion-list-x_65',
//         keywords: {
//           'es-sch-ads_name_page': 'cochesnet/ocasion/listado',
//           'es-sch-event_name': 'list',
//           'aa-sch-country_code': 'es',
//           'aa-sch-supply_type': 'wph',
//           'es-sch-section': 'ocasion',
//           'aa-sch-page_type': 'list',
//           'es-sch-adformat': 'x65'
//         },
//         sizes: [[300, 250], [320, 250]]
//       }
//     }
//   })
//   .then(position => openAds.displayPosition({id: position.id}))
//
//
// openAds
//   .addPosition({
//     id: 'ad3',
//     name: 'med-rect',
//     specification: {
//       source: 'AppNexus',
//       appnexus: {
//         targetId: 'ad3',
//         invCode: 'es-cn-wph-ocasion-list-x_65',
//         keywords: {
//           'es-sch-ads_name_page': 'cochesnet/ocasion/listado',
//           'es-sch-event_name': 'list',
//           'aa-sch-country_code': 'es',
//           'aa-sch-supply_type': 'wph',
//           'es-sch-section': 'ocasion',
//           'aa-sch-page_type': 'list',
//           'es-sch-adformat': 'x65'
//         },
//         sizes: [[300, 250], [320, 250]]
//       },
//       prebid: {
//         code: 'ad1',
//         mediaTypes: {
//           banner: {
//             sizes: [[300, 250], [320, 250]]
//           }
//         },
//         bids: [
//           {
//             bidder: 'criteo',
//             params: {
//               zoneId: '779159'
//             }
//           },
//           {
//             bidder: 'rubicon',
//             params: {
//               accountId: '15052',
//               siteId: '88944',
//               zoneId: '419134'
//             }
//           }
//         ]
//       }
//     }
//   })
//   .then(position => openAds.displayPosition({id: position.id}))
//
// setInterval(() => openAds.refreshPosition({id: 'ad3'}), 10000)
