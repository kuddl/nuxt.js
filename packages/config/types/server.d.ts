/**
 * NuxtConfigurationServer
 * Documentation: https://nuxtjs.org/api/configuration-server
 */

export interface NuxtConfigurationServer {
  host?: string
  https?: {
    cert?: string | Buffer
    key?: string | Buffer
  }
  port?: number | string
  socket?: string
  timing?: boolean | { total?: boolean }
}
