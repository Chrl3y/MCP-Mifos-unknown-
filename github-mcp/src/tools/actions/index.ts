import {
  listWorkflowsConfig,
  listWorkflowRunsConfig,
  getWorkflowRunConfig,
  triggerWorkflowDispatchConfig,
  listWorkflowJobsConfig,
} from '@/tools/actions/types.js';
import {
  listWorkflowsCallback,
  listWorkflowRunsCallback,
  getWorkflowRunCallback,
  triggerWorkflowDispatchCallback,
  listWorkflowJobsCallback,
} from '@/tools/actions/callbacks.js';

export const actionTools = [
  { name: 'github_list_workflows', config: listWorkflowsConfig, callback: listWorkflowsCallback },
  {
    name: 'github_list_workflow_runs',
    config: listWorkflowRunsConfig,
    callback: listWorkflowRunsCallback,
  },
  {
    name: 'github_get_workflow_run',
    config: getWorkflowRunConfig,
    callback: getWorkflowRunCallback,
  },
  {
    name: 'github_trigger_workflow_dispatch',
    config: triggerWorkflowDispatchConfig,
    callback: triggerWorkflowDispatchCallback,
  },
  {
    name: 'github_list_workflow_jobs',
    config: listWorkflowJobsConfig,
    callback: listWorkflowJobsCallback,
  },
];
