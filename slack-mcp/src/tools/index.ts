import { channelTools } from '@/tools/channels/index.js';
import { messageTools } from '@/tools/messages/index.js';
import { userTools } from '@/tools/users/index.js';

export const allTools = [...channelTools, ...messageTools, ...userTools];
