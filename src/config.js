export default {
  s3: {
    REGION: "eu-north-1",
    BUCKET: "notes-app-application-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://8p1a3mc939.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_getNyJ0rC",
    APP_CLIENT_ID: "3r5untmhtunggfm0dqaes6ua77",
    IDENTITY_POOL_ID: "us-east-2:9deda19b-106d-42c5-897e-13ad5993d6d9"
  },
  STRIPE_KEY: "pk_test_HAiPJECjdV4EZRZ1bOQF4MBd00c6P9KzSK",
};