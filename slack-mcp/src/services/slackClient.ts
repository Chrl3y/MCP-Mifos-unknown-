import { WebClient } from '@slack/web-api';
import 'dotenv/config';

if (!process.env.SLACK_BOT_TOKEN) {
  throw new Error('SLACK_BOT_TOKEN is required');
}

export const slack = new WebClient(process.env.SLACK_BOT_TOKEN);
