import { defineEventHandler, readBody, createError } from 'h3';
import db from '~/server/db'; // 引入数据库连接

interface SubscribeRequestBody {
  email: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<SubscribeRequestBody>(event);

  // 检查 email 是否存在
  if (!body || !body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email is required',
    });
  }

  // 插入到 SQLite 数据库
  try {
    const stmt = db.prepare('INSERT INTO subscriptions (email) VALUES (?)');
    stmt.run(body.email);

    console.log('New subscription saved:', body.email);

    return {
      success: true,
      message: 'Subscription successful!',
    };
  } catch (error: any) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      throw createError({
        statusCode: 409,
        statusMessage: 'Email is already subscribed.',
      });
    }

    console.error('Database error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to save subscription. Please try again later.',
    });
  }
});