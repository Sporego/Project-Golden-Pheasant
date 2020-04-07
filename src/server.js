import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import dotenv from 'dotenv/config';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    (req, res, next) => {
      return sapper.middleware({
        session: () => {
          return {};
        },
      })(req, res, next);
    }
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });
