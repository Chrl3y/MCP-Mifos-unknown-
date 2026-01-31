import {
    getRepositoryConfig,
    getFileContentsConfig,
} from '@/tools/repository/types.js';
import {
    getRepositoryCallback,
    getFileContentsCallback,
} from '@/tools/repository/callbacks.js';

export const repoTools = [
    { name: 'github_get_repository', config: getRepositoryConfig, callback: getRepositoryCallback },
    { name: 'github_get_file_contents', config: getFileContentsConfig, callback: getFileContentsCallback },
];
