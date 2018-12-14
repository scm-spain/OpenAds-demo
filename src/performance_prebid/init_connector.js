import OpenAds from '@schibstedspain/openads'
import AppNexusConnectorPrebid from '@schibstedspain/openads-appnexus-prebid'

export const initOpenAds = () => {
  const appNexusConnectorPrebid = AppNexusConnectorPrebid.init({
    config: {
      pageOpts: {
        member: 3397
      }
    }
  })

  return OpenAds.init({
    config: {
      Sources: {
        AppNexus: appNexusConnectorPrebid
      }
    }
  })
}
