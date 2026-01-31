import {
  listIssuesConfig,
  getIssueConfig,
  createIssueConfig,
  updateIssueConfig,
  addIssueCommentConfig,
} from '@/tools/issues/types.js';
import {
  listIssuesCallback,
  getIssueCallback,
  createIssueCallback,
  updateIssueCallback,
  addIssueCommentCallback,
} from '@/tools/issues/callbacks.js';

export const issueTools = [
  { name: 'github_list_issues', config: listIssuesConfig, callback: listIssuesCallback },
  { name: 'github_get_issue', config: getIssueConfig, callback: getIssueCallback },
  { name: 'github_create_issue', config: createIssueConfig, callback: createIssueCallback },
  { name: 'github_update_issue', config: updateIssueConfig, callback: updateIssueCallback },
  {
    name: 'github_add_issue_comment',
    config: addIssueCommentConfig,
    callback: addIssueCommentCallback,
  },
];
