import { findUsersConfig, getCurrentUserConfig } from '@/tools/users/types.js';
import { findUsersCallback, getCurrentUserCallback } from '@/tools/users/callback.js';

export const userTools = [
  { name: 'get_users', config: findUsersConfig, callback: findUsersCallback },
  { name: 'get_current_user', config: getCurrentUserConfig, callback: getCurrentUserCallback },
];
