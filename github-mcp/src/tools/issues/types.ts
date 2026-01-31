import * as z from 'zod';

export const listIssuesConfig = {
  description: 'List repository issues.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    state: z.enum(['open', 'closed', 'all']).default('open').describe('Issue state.'),
  }),
};
export type ListIssuesInput = z.infer<typeof listIssuesConfig.inputSchema>;

export const getIssueConfig = {
  description: 'Get a single issue details.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    issue_number: z.number().describe('Issue number.'),
  }),
};
export type GetIssueInput = z.infer<typeof getIssueConfig.inputSchema>;

export const createIssueConfig = {
  description: 'Create a new issue.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    title: z.string().describe('Issue title.'),
    body: z.string().optional().describe('Issue content.'),
  }),
};
export type CreateIssueInput = z.infer<typeof createIssueConfig.inputSchema>;

export const updateIssueConfig = {
  description: 'Update issue status or content.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    issue_number: z.number().describe('Issue number.'),
    state: z.enum(['open', 'closed']).optional().describe('New state.'),
    title: z.string().optional().describe('New title.'),
    body: z.string().optional().describe('New body content.'),
  }),
};
export type UpdateIssueInput = z.infer<typeof updateIssueConfig.inputSchema>;

export const addIssueCommentConfig = {
  description: 'Add a comment to an issue.',
  inputSchema: z.object({
    owner: z.string().describe('Repository owner.'),
    repo: z.string().describe('Repository name.'),
    issue_number: z.number().describe('Issue number.'),
    body: z.string().describe('Comment text.'),
  }),
};
export type AddIssueCommentInput = z.infer<typeof addIssueCommentConfig.inputSchema>;
