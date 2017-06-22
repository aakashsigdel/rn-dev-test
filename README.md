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
    "access_token": "79ea923ffe51db6e2078822d2c7fd78293eae8ff",
    "expires_in": 3600,
    "token_type": "Bearer",
    "scope": null
}
```
### Jobs [GET]
https://test.inploi.me/jobs?token=79ea923ffe51db6e2078822d2c7fd78293eae8ff
#### required parameters:
1. access_token = the access token
### Pagination
https://test.inploi.me/jobs/`page_number`?token=79ea923ffe51db6e2078822d2c7fd78293eae8ff
The page_number defaults to `1` for the 1st 10 jobs, then you can use `2` for the next 10 jobs etc...
### Response example
```javascript
{
    "browse": [
    {
        "id": "2045",
        "employer_id": "10542",
        "job_term": "ft",
        "role": "Barista",
        "full_description": "We are looking for a professional Barista to join our busy cafe in centrl London.",
        "key_skills": "Energy,Attention to detail,Confidence,Organised,Phone manner",
        "experience": "Moderate (1 year)",
        "language": "English",
        "rate": "10.50",
        "rate_type": "hourly",
        "masked_rate": "0",
        "tronc": "0",
        "living_wage": null,
        "multiple": "1",
        "address": "123 The Street",
        "location_town": "London",
        "location_city": "London",
        "postcode": "NE1 4APT",
        "location_country": null,
        "latitude": "51.53258514404297",
        "longitude": "-0.10030390322208405",
        "comments": "",
        "posted": "2017-06-20 14:54:56",
        "status": "active",
        "updated": "2017-06-20 14:54:56",
        "published": "2017-06-20 14:54:56",
        "expired": "0",
        "first_name": "Steve",
        "company": "Apple Inc.",
        "company_type": "Coffee Shop",
        "employer_img": "profile_10539-avatar",
        "employer_img_v": "1497966724",
        "company_img": "profile_10539-logo-bg",
        "company_img_v": "1497966724",
        "total": null,
        "dates": [
        {
            "id": "128",
            "job_id": "2359",
            "type": "ft",
            "start": null,
            "end": null,
            "asap": "1"
        }
        ]
    }
]
}
```

## Field descriptions
Field Name | Description
------------ | -------------
id | The unique identifying value for the job.
employer_id | The unique identifying value for the employer.
job_term | An object representing the job term (short-term, part-time or full-time).
role | An object representing the role/position/job title
full_description | A long-form text area describing the job.
key_skills | The key skills required for the job. [CSV]
experience | The level of experience required for the job.
language | The languages required for the job.
rate | The pay rate for the job.
rate_type | The rate type for the job (hourly, annual or total job value)
masked_rate | Returns true if the employer the rate is masked and instead displays as '£Competitive'
tronc | Returns true if the employer has added tronc to the rate e.g. "+tips"
living_wage | Returns true if the job pays equal to or more than the living wage in London i.e £9.75
multiple | The number of available positions for this job.
address | The jobs address - first line.
location_town | The jobs address - town.
location_city | The jobs address - city.
postcode | The jobs address - postcode.
location_country | The jobs address - country.
latitude | The jobs address - latitude.
longitude | The jobs address - longitude.
comments | The jobs address - comments to help people find the location.
posted | The jobs address - comments to help people find the location.
status | An object representing the job status (live, draft, expired, hired, payment & feedback, complete)
updated | Date defining when the job was last updated.
published | Date defining when the job was published.
expired | Date defining when the job expires.
first_name | The employer's first name.
company | The employer's company name.
company_type | The company type.
employer_img | The part of the image URL defining the name of the employers formatted avatar image, if one has been provided.
employer_img_v | The part of the image URL defining the image version (needs to have v prepended to it e.g v123456789)
company_img | The part of the image URL defining the name of the employers formatted cover image, if one has been provided.
company_img_v | The part of the image URL defining the image version (needs to have v prepended to it e.g v123456789)
total | If the job is 'short-term' how many hours have been defined. Will return `null` if not.
dates | Defines a dates array.
dates.id | Defines the ID of the dates array.
dates.job_id | Defines the jobs ID of the dates array.
dates.type | Defines is there is a trial or not.
dates.start | Defines the start date.
dates.end | Defines the end date.
dates.asap | Defines if the start date is as soon as possible or not (INT: 1 = true || 0 = false). note: - start/end date may be empty if set to true

## Must work on the following phones/OS versions:
* Pixel XL
* iPhone 7
* Note 3
## Must work on the following OS versions:
* Android 4.1 - 7.1.2
* IOS 9 and above
