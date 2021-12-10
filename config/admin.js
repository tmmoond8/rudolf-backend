module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'eb9de6f49a2ec73ccf59869913f7a9af'),
  },
});
