import { slack } from '@/services/slackClient.js';
import { ListUsersInput, GetUserInfoInput } from '@/tools/users/types.js';

export const listUsersCallback = async (params: ListUsersInput) => {
  const response = await slack.users.list({
    limit: params.limit,
  });

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(
          response.members?.map((u) => ({
            id: u.id,
            name: u.name,
            real_name: u.real_name,
            is_bot: u.is_bot,
            deleted: u.deleted,
          })),
          null,
          2,
        ),
      },
    ],
  };
};

export const getUserInfoCallback = async (params: GetUserInfoInput) => {
  const response = await slack.users.info({
    user: params.user,
  });

  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(
          {
            id: response.user?.id,
            name: response.user?.name,
            real_name: response.user?.real_name,
            tz: response.user?.tz,
            is_admin: response.user?.is_admin,
            is_bot: response.user?.is_bot,
          },
          null,
          2,
        ),
      },
    ],
  };
};
