import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';
import { auth } from 'express-openid-connect';

import Sequelize from 'sequelize';
import session from 'express-session';

import dotenv from 'dotenv/config';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

import connectSessionSequelize from 'connect-session-sequelize';
const SequelizeSessionStore = connectSessionSequelize(session.Store);

const sequelize = new Sequelize(process.env.DATABASE_URL);

function sequelizeTest() {
  return new Promise(
    (resolve) => {
      console.log('Connection has been established successfully.');
    },
    (reject) => {
      console.log('error cannot auth postgres');
    }
  );
}

express()
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    auth({
      required: false,
      auth0Logout: true,
      baseURL: process.env.BASE_URL,
      issuerBaseURL: process.env.ISSUER_BASE_URL,
      clientID: process.env.CLIENT_ID,
      appSession: {
        secret: process.env.SECRET,
      },
    }),
    (req, res, next) => {
      return sapper.middleware({
        session: () => {
          return {
            isAuthenticated: req.isAuthenticated(),
            user: req.openid.user,
          };
        },
      })(req, res, next);
    }
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });
