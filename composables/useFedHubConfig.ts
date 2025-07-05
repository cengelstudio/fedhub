import { appConfig } from '~/config/app.config'

export const useFedHubConfig = () => {
  const runtimeConfig = useRuntimeConfig()

  return {
    appConfig
  }
}
