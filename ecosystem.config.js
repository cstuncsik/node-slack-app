module.exports = {
  apps: [
    {
      name: 'node-slack-app',
      script: 'npm',
      args: 'start',
      exec_mode: 'cluster_mode',
      instances: '2',
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      host: 'tatyom',
      ref: 'origin/master',
      repo: 'git@github.com:cstuncsik/node-slack-app.git',
      path: '/home/$USER/node-slack-app',
      'pre-deploy': 'git pull',
      'post-deploy': 'yarn install --production && pm2 startOrReload ecosystem.config.js --env production'
    }
  }
}
