import { slack } from '@/services/slackClient.js';
import { ListChannelsInput } from '@/tools/channels/types.js';

export const listChannelsCallback = async (params: ListChannelsInput) => {
  const response = await slack.conversations.list({
    types: params.types,
  });

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(
          response.channels?.map((c) => ({
            id: c.id,
            name: c.name,
            topic: c.topic?.value,
            is_member: c.is_member,
            num_members: c.num_members,
          })),
          null,
          2,
        ),
      },
    ],
  };
};
