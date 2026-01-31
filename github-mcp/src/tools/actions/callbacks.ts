import { github } from '@/services/githubClient.js';
import {
    ListWorkflowsInput,
    ListWorkflowRunsInput,
    GetWorkflowRunInput,
    TriggerWorkflowDispatchInput,
    ListWorkflowJobsInput,
} from './types.js';

export const listWorkflowsCallback = async (params: ListWorkflowsInput) => {
    const { data } = await github.rest.actions.listRepoWorkflows(params);
    return {
        content: [{
            type: 'text', text: JSON.stringify(data.workflows.map(w => ({
                id: w.id,
                name: w.name,
                path: w.path,
                state: w.state
            })), null, 2)
        }],
    };
};

export const listWorkflowRunsCallback = async (params: ListWorkflowRunsInput) => {
    const { data } = params.workflow_id
        ? await github.rest.actions.listWorkflowRuns({ ...params, workflow_id: params.workflow_id! })
        : await github.rest.actions.listWorkflowRunsForRepo(params);

    return {
        content: [{
            type: 'text', text: JSON.stringify(data.workflow_runs.map(r => ({
                id: r.id,
                name: r.name,
                status: r.status,
                conclusion: r.conclusion,
                event: r.event,
                branch: r.head_branch,
                url: r.html_url
            })), null, 2)
        }],
    };
};

export const getWorkflowRunCallback = async (params: GetWorkflowRunInput) => {
    const { data } = await github.rest.actions.getWorkflowRun(params);
    return {
        content: [{
            type: 'text', text: JSON.stringify({
                id: data.id,
                name: data.name,
                status: data.status,
                conclusion: data.conclusion,
                url: data.html_url
            }, null, 2)
        }],
    };
};

export const triggerWorkflowDispatchCallback = async (params: TriggerWorkflowDispatchInput) => {
    await github.rest.actions.createWorkflowDispatch(params);
    return {
        content: [{ type: 'text', text: 'Workflow triggered.' }],
    };
};

export const listWorkflowJobsCallback = async (params: ListWorkflowJobsInput) => {
    const { data } = await github.rest.actions.listJobsForWorkflowRun(params);
    return {
        content: [{
            type: 'text', text: JSON.stringify(data.jobs.map(j => ({
                id: j.id,
                name: j.name,
                status: j.status,
                conclusion: j.conclusion,
                url: j.html_url
            })), null, 2)
        }],
    };
};
