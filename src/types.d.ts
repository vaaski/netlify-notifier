export interface NetlifyHook {
  id: string
  site_id: string
  build_id: string
  state: string
  name: string
  url: string
  ssl_url: string
  admin_url: string
  deploy_url: string
  deploy_ssl_url: string
  created_at: string
  updated_at: string
  user_id: string
  error_message?: null
  required?: null[] | null
  required_functions?: null[] | null
  commit_ref?: null
  review_id?: null
  branch: string
  commit_url?: null
  skipped?: null
  locked?: null
  log_access_attributes: LogAccessAttributes
  title?: null
  review_url?: null
  published_at: string
  context: string
  deploy_time: number
  available_functions?: null[] | null
  screenshot_url?: null
  site_capabilities: SiteCapabilities
  committer?: null
  skipped_log?: null
  manual_deploy: boolean
  file_tracking_optimization: boolean
  plugin_state: string
  has_edge_handlers: boolean
  links: Links
}
export interface LogAccessAttributes {
  type: string
  url: string
  endpoint: string
  path: string
  token: string
}
export interface SiteCapabilities {
  title: string
  asset_acceleration: boolean
  form_processing: boolean
  cdn_propagation: string
  build_node_pool: string
  domain_aliases: boolean
  secure_site: boolean
  prerendering: boolean
  proxying: boolean
  ssl: string
  rate_cents: number
  yearly_rate_cents: number
  ipv6_domain: string
  branch_deploy: boolean
  managed_dns: boolean
  geo_ip: boolean
  split_testing: boolean
  id: string
  cdn_tier: string
}
export interface Links {
  permalink: string
  alias: string
}
