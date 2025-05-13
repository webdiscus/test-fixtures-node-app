module.exports = {
  apps: [
    {
      name: 'docker-pm2-test',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        FORCE_COLOR: 1
      },
    },
  ],
};
