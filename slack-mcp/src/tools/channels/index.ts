import { listChannelsConfig } from '@/tools/channels/types.js';
import { listChannelsCallback } from '@/tools/channels/callbacks.js';

export const channelTools = [
  { name: 'slack_list_channels', config: listChannelsConfig, callback: listChannelsCallback },
];
