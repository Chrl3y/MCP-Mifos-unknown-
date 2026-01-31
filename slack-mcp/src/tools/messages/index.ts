import {
    postMessageConfig,
    getHistoryConfig,
    addReactionConfig,
} from '@/tools/messages/types.js';
import {
    postMessageCallback,
    getHistoryCallback,
    addReactionCallback,
} from '@/tools/messages/callbacks.js';

export const messageTools = [
    { name: 'slack_post_message', config: postMessageConfig, callback: postMessageCallback },
    { name: 'slack_get_history', config: getHistoryConfig, callback: getHistoryCallback },
    { name: 'slack_add_reaction', config: addReactionConfig, callback: addReactionCallback },
];
