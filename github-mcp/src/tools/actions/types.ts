import * as z from 'zod';

export const listWorkflowsConfig = {
  description: 'List repository workflows.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
  }),
};
export type ListWorkflowsInput = z.infer<typeof listWorkflowsConfig.inputSchema>;

export const listWorkflowRunsConfig = {
  description: 'List workflow runs.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    workflow_id: z
      .union([z.string(), z.number()])
      .optional()
      .describe('Filter by workflow ID or file name.'),
    status: z
      .enum(['queued', 'in_progress', 'completed', 'waiting', 'requested', 'pending'])
      .optional()
      .describe('Filter by status.'),
  }),
};
export type ListWorkflowRunsInput = z.infer<typeof listWorkflowRunsConfig.inputSchema>;

export const getWorkflowRunConfig = {
  description: 'Get workflow run details.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    run_id: z.number().describe('Run ID.'),
  }),
};
export type GetWorkflowRunInput = z.infer<typeof getWorkflowRunConfig.inputSchema>;

export const triggerWorkflowDispatchConfig = {
  description: 'Trigger a workflow event.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    workflow_id: z.union([z.string(), z.number()]).describe('Workflow ID or file name.'),
    ref: z.string().describe('Git reference (branch/tag).'),
    inputs: z.record(z.any()).optional().describe('Workflow inputs.'),
  }),
};
export type TriggerWorkflowDispatchInput = z.infer<
  typeof triggerWorkflowDispatchConfig.inputSchema
>;

export const listWorkflowJobsConfig = {
  description: 'List jobs for a workflow run.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    run_id: z.number().describe('Run ID.'),
  }),
};
export type ListWorkflowJobsInput = z.infer<typeof listWorkflowJobsConfig.inputSchema>;
