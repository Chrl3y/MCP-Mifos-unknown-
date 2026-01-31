import * as z from 'zod';

export const listChannelsConfig = {
  description: 'List public channels in the workspace.',
  inputSchema: z.object({
    types: z
      .string()
      .default('public_channel')
      .describe('Comma-separated list of channel types (public_channel, private_channel).'),
  }),
};
export type ListChannelsInput = z.infer<typeof listChannelsConfig.inputSchema>;
