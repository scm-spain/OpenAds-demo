import OpenAds from '@schibstedspain/openads'
import AppNexusConnector from '@schibstedspain/openads-appnexus'

export const initOpenAds = () => {
  const appNexusConnector = AppNexusConnector.init({
    config: {
      pageOpts: {
        member: 3397
      }
    }
  })

  return OpenAds.init({
    config: {
      Sources: {
        AppNexus: appNexusConnector
      }
    }
  })
}
