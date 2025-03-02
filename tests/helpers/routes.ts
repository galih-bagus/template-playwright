import {Page} from '@playwright/test';
// @ts-ignore
import dotenv from 'dotenv';

dotenv.config();

export async function url(page: Page): Promise<void> {
    if (!process.env.URL) {
        throw new Error('URL is not defined in environment variables');
    }
    await page.goto(process.env.URL);
}