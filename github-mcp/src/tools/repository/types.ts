import * as z from 'zod';

export const getRepositoryConfig = {
    description: 'Get repository details.',
    inputSchema: z.object({
        owner: z.string().describe('Repository owner.'),
        repo: z.string().describe('Repository name.'),
    }),
};
export type GetRepositoryInput = z.infer<typeof getRepositoryConfig.inputSchema>;

export const getFileContentsConfig = {
    description: 'Get file content.',
    inputSchema: z.object({
        owner: z.string().describe('Repository owner.'),
        repo: z.string().describe('Repository name.'),
        path: z.string().describe('File path.'),
        ref: z.string().optional().describe('Branch/tag/commit.'),
    }),
};
export type GetFileContentsInput = z.infer<typeof getFileContentsConfig.inputSchema>;
