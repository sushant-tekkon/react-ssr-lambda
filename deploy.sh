echo 'entering simple-ssr directory'
cd simple-ssr
echo 'building code'
npm run build-all
echo 'entering cdk directory'
cd ../cdk
echo 'deploying...'
cdk deploy SSRAppStack --parameters mySiteBucketName=sushant-ssr
