import { slack } from '@/services/slackClient.js';
import {
    PostMessageInput,
    GetHistoryInput,
    AddReactionInput,
} from '@/tools/messages/types.js';

export const postMessageCallback = async (params: PostMessageInput) => {
    const response = await slack.chat.postMessage({
        channel: params.channel,
        text: params.text,
        thread_ts: params.thread_ts,
    });

    return {
        content: [{
            type: 'text', text: JSON.stringify({
                ok: response.ok,
                channel: response.channel,
                ts: response.ts,
                text: response.message?.text
            }, null, 2)
        }],
    };
};

export const getHistoryCallback = async (params: GetHistoryInput) => {
    const response = await slack.conversations.history({
        channel: params.channel,
        limit: params.limit,
    });

    return {
        content: [{
            type: 'text', text: JSON.stringify(response.messages?.map(m => ({
                user: m.user,
                text: m.text,
                ts: m.ts,
                thread_ts: m.thread_ts,
                reply_count: m.reply_count,
                reactions: m.reactions?.map(r => ({ name: r.name, count: r.count }))
            })), null, 2)
        }],
    };
};

export const addReactionCallback = async (params: AddReactionInput) => {
    const response = await slack.reactions.add({
        channel: params.channel,
        timestamp: params.timestamp,
        name: params.name,
    });

    return {
        content: [{ type: 'text', text: JSON.stringify({ ok: response.ok }, null, 2) }],
    };
};
