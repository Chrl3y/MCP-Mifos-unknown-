import { issueTools } from '@/tools/issues/index.js';
import { repoTools } from '@/tools/repository/index.js';
import { actionTools } from '@/tools/actions/index.js';

export const allTools = [
    ...issueTools,
    ...repoTools,
    ...actionTools,
];
