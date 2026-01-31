import * as z from 'zod';

export const postMessageConfig = {
  description: 'Post a message to a Slack channel.',
  inputSchema: z.object({
    channel: z.string().describe('Channel ID or name.'),
    text: z.string().describe('Message text.'),
    thread_ts: z
      .string()
      .optional()
      .describe('Timestamp of the parent message to reply in a thread.'),
  }),
};
export type PostMessageInput = z.infer<typeof postMessageConfig.inputSchema>;

export const getHistoryConfig = {
  description: 'Get message history for a channel.',
  inputSchema: z.object({
    channel: z.string().describe('Channel ID.'),
    limit: z.number().default(20).describe('Number of messages to retrieve.'),
  }),
};
export type GetHistoryInput = z.infer<typeof getHistoryConfig.inputSchema>;

export const addReactionConfig = {
  description: 'Add an emoji reaction to a message.',
  inputSchema: z.object({
    channel: z.string().describe('Channel ID.'),
    timestamp: z.string().describe('Message timestamp (ts).'),
    name: z.string().describe('Emoji name (without colons).'),
  }),
};
export type AddReactionInput = z.infer<typeof addReactionConfig.inputSchema>;
