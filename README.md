# rn-dev-test
React Native Developer Test
### Auth [POST]
https://test.inploi.me/token
#### required parameters:
1. grant_type = client_credentials
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
### Jobs [GET]
https://test.inploi.me/jobs
#### required parameters:
1. access_token = the access token
### Response example
```javascript
{
    "browse": [
    {
        "id": "",
        "employer_id": "",
        "type": "",
        "job_term": "",
        "role": "",
        "full_description": "",
        "key_skills": "",
        "experience": "",
        "language": "",
        "rate": "",
        "rate_type": "",
        "masked_rate": "",
        "tronc": "",
        "living_wage": ,
        "multiple": "",
        "address": "",
        "location_town": ,
        "location_city": " ",
        "postcode": "",
        "location_country":  ,
        "latitude": "",
        "longitude": "",
        "comments": "",
        "posted": "",
        "status": "",
        "candidates": ,
        "template": ,
        "level": "",
        "connections": "",
        "unli_connect": "",
        "updated": "",
        "published": "",
        "expired": "",
        "first_name": "",
        "company": "",
        "company_type": "",
        "employer_img": "",
        "employer_img_v": "",
        "company_img": "",
        "company_img_v": "",
        "employer_rating": ,
        "total": ,
        "dates": [
        {
            "id": "",
            "job_id": "",
            "type": "",
            "start": "",
            "end": "",
            "asap": ""
        }
        ]
    }
]
}
```
