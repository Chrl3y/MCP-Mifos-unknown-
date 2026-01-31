import { listUsersConfig, getUserInfoConfig } from '@/tools/users/types.js';
import { listUsersCallback, getUserInfoCallback } from '@/tools/users/callbacks.js';

export const userTools = [
    { name: 'slack_list_users', config: listUsersConfig, callback: listUsersCallback },
    { name: 'slack_get_user_info', config: getUserInfoConfig, callback: getUserInfoCallback },
];
