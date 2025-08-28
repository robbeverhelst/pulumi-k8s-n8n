import { config, Namespace } from '@homelab/shared'

const cfg = config('n8n')

const ns = new Namespace('n8n', {
  metadata: { name: cfg.get('namespace', 'n8n') },
})

export const namespace = ns.metadata.name
