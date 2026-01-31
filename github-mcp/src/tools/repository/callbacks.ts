import { github } from '@/services/githubClient.js';
import {
    GetRepositoryInput,
    GetFileContentsInput,
} from '@/tools/repository/types.js';

export const getRepositoryCallback = async (params: GetRepositoryInput) => {
    const { data } = await github.rest.repos.get(params);
    return {
        content: [{
            type: 'text', text: JSON.stringify({
                name: data.name,
                full_name: data.full_name,
                description: data.description,
                default_branch: data.default_branch,
                visibility: data.visibility,
                url: data.html_url
            }, null, 2)
        }],
    };
};

export const getFileContentsCallback = async (params: GetFileContentsInput) => {
    const { data } = await github.rest.repos.getContent(params);

    if (!Array.isArray(data) && 'content' in data && data.encoding === 'base64') {
        const content = Buffer.from(data.content, 'base64').toString('utf-8');
        return {
            content: [{ type: 'text', text: content }],
        };
    }

    return {
        content: [{ type: 'text', text: JSON.stringify(data, null, 2) }],
    };
};
