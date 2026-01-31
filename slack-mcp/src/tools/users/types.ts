import * as z from 'zod';

export const listUsersConfig = {
  description: 'List users in the Slack workspace.',
  inputSchema: z.object({
    limit: z.number().default(100).describe('Maximum number of users to retrieve.'),
  }),
};
export type ListUsersInput = z.infer<typeof listUsersConfig.inputSchema>;

export const getUserInfoConfig = {
  description: 'Get details about a specific Slack user.',
  inputSchema: z.object({
    user: z.string().describe('User ID.'),
  }),
};
export type GetUserInfoInput = z.infer<typeof getUserInfoConfig.inputSchema>;
