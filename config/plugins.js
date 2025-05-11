module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("a5vj98bm4h0ik3ufgtbpgb7hwqe2poc1"),
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env('71484efb957958c9916be1ba53377e33'),
        secretAccessKey: env('00507372d32b8dcbffd0dfb095c2bf003b251895d2cda563bea2b8324aa02fb4'),
        endpoint: env('https://2e800734092d7b1506bc181e26e17348.r2.cloudflarestorage.com/acv-strapi-media'),
        region: 'auto',
        params: {
          Bucket: env('acv-strapi-media'),
        },
        s3ForcePathStyle: true,
      },
    },
  },
});
