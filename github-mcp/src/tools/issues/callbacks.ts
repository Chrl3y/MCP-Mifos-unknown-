import { github } from '@/services/githubClient.js';
import {
  ListIssuesInput,
  GetIssueInput,
  CreateIssueInput,
  UpdateIssueInput,
  AddIssueCommentInput,
} from '@/tools/issues/types.js';

const formatIssue = (i: any) => ({
  number: i.number,
  title: i.title,
  state: i.state,
  user: i.user?.login,
  body: i.body || undefined,
  url: i.html_url,
});

export const listIssuesCallback = async (params: ListIssuesInput) => {
  const { data } = await github.rest.issues.listForRepo(params);
  return {
    content: [{ type: 'text', text: JSON.stringify(data.map(formatIssue), null, 2) }],
  };
};

export const getIssueCallback = async (params: GetIssueInput) => {
  const { data } = await github.rest.issues.get(params);
  return {
    content: [{ type: 'text', text: JSON.stringify(formatIssue(data), null, 2) }],
  };
};

export const createIssueCallback = async (params: CreateIssueInput) => {
  const { data } = await github.rest.issues.create(params);
  return {
    content: [{ type: 'text', text: JSON.stringify(formatIssue(data), null, 2) }],
  };
};

export const updateIssueCallback = async (params: UpdateIssueInput) => {
  const { data } = await github.rest.issues.update(params);
  return {
    content: [{ type: 'text', text: JSON.stringify(formatIssue(data), null, 2) }],
  };
};

export const addIssueCommentCallback = async (params: AddIssueCommentInput) => {
  const { data } = await github.rest.issues.createComment(params);
  return {
    content: [
      {
        type: 'text',
        text: JSON.stringify(
          {
            id: data.id,
            user: data.user?.login,
            body: data.body,
            url: data.html_url,
          },
          null,
          2,
        ),
      },
    ],
  };
};
