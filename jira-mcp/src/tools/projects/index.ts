import { listProjectsConfig, getProjectConfig } from '@/tools/projects/types.js';
import { listProjectsCallback, getProjectCallback } from '@/tools/projects/callbacks.js';

export const projectTools = [
  { name: 'get_projects', config: listProjectsConfig, callback: listProjectsCallback },
  { name: 'get_project_details', config: getProjectConfig, callback: getProjectCallback },
];
