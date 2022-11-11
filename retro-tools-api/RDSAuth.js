const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const AWS = require('aws-sdk')
const mysql = require('mysql2');
const { Signer } = require("@aws-sdk/rds-signer");

const basename = path.basename(__filename); // <<< the name of this file (RDSAuth.js)
const env = process.env.NODE_ENV || 'development'; // <<< the current env name (or 'development')
const config = require('./config.json')[env]; //<<< gets the config for the RDS database relevant to this env

let sequelize; // << give this object global scope, key-values assigned later

const signer = new AWS.RDS.Signer({
    credentials: new AWS.SharedIniFileCredentials({profile: 'default'}),
  region: 'eu-west-1',
  hostname: config.host,
  port: config.port,
  username: config.username
}) // <<< this signer object can be used to generate an auth token to a database.

console.log({
    region: config.aws_region,
    hostname: config.host,
    port: config.port,
    username: config.username,
  })

signer.getAuthToken({
    region: config.aws_region,
    hostname: config.host,
    port: config.port,
    username: config.username,
    password: "global2022"
  }).then(token => {
    console.log(token)
        sequelize = new Sequelize({
            database: config.database,
            username: config.username,
            password: token,
            host: config.host,
            port: config.port,
            dialect: 'mysql',
            dialectOptions: {
                connectTimeout: 900000,
                ssl: 'Amazon RDS',
                authPlugins: {
                    mysql_clear_password: () => () => {
                      return signer.getAuthToken({
                        region: config.aws_region,
                        hostname: config.host,
                        port: config.port,
                        username: config.username
                      });
                    }
                }
            }
        })
    
    console.log(sequelize)
    sequelize.authenticate().then(() => {
        console.log('DB is authenticated!');
      }).catch((err) => {
          console.log('DB is cannot authenticated!', err);
      });
  })
        
 

