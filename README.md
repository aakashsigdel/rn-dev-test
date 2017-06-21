# rn-dev-test
React Native Developer Test
### Auth
   https://test.inploi.me/token
#### required parameters:
1. grant_type = 'client_credentials'
2. client_id = user email
3. client_secret = user password

#### returns:
```javascript
{
    "access_token": "0aae5d8e8f3be06a996a542f4368ed1aed0cdf25",
    "expires_in": 3600,
    "token_type": "Bearer",
    "scope": null
}
```
### Endpoint
   https://test.inploi.me/jobs
#### required parameters:
1. access_token = the access token
### Response example
```javascript
{
  'id' : 1
}
```
