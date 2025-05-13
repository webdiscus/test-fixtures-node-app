module.exports = {
  apps: [
    {
      name: 'docker-test-app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
    },
  ],
};
