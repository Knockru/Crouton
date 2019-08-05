# Crouton

![GitHub](https://img.shields.io/github/license/Knockru/Crouton.svg?style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/Knockru/Crouton.svg?style=flat-square)

Crouton counts and records the number of tweets posted yesterday.

## Information

| Key      | Value                   |
| -------- | ----------------------- |
| Trigger  | Timer                   |
| Schedule | 15:15 (GMT) on everyday |

## Environment Variables / Key Vault Secrets

If you set the following variables to Azure Key Vaults, use the value of the variable name corrected to the pascal case.  
Example: `CROUTON_PIXELA_ACCESS_TOKEN` is `CroutonPixelaAccessToken`.

| Variable                               | Description                               | Example            |
| -------------------------------------- | ----------------------------------------- | ------------------ |
| `AZURE_CLIENT_ID`                      | Azure AD Application Client ID            | `xxxxxx-...`       |
| `AZURE_CLIENT_SECRET`                  | Azure AD Application Secret               | `xxxxxx`           |
| `AZURE_TENANT_ID`                      | Azure AD Tenant ID                        | `xxxxxx-...`       |
| `CROUTON_AZURE_KEY_VAULT_NAME`         | Azure Key Vault Container Name            | `container`        |
| `CROUTON_PIXELA_ACCESS_TOKEN`          | Pixe.la Access Token                      | `xxxxxx`           |
| `CROUTON_PIXELA_GRAPH_ID`              | Pixe.la Graph ID                          | `twitter`          |
| `CROUTON_PIXELA_USERNAME`              | Pixe.la Username                          | `mika-f`           |
| `CROUTON_TIME_DIFFERENCE`              | Time Difference between London            | `+0900`            |
| `CROUTON_TWITTER_ACCESS_TOKENS`        | Array of Twitter Authorized Access Tokens | `xxxxxx,xxxxxx...` |
| `CROUTON_TWITTER_ACCESS_TOKEN_SECRETS` | Array of Twitter Access Token Secrets     | `xxxxxx,xxxxxx...` |
| `CROUTON_TWITTER_CONSUMER_KEY`         | Twitter Application Consumer Key          | `xxxxxx`           |
| `CROUTON_TWITTER_CONSUMER_SECRET`      | Twitter Application Consumer Secret       | `xxxxxx`           |
| `CROUTON_TWITTER_FORMAT`               | Tweet body                                | SEE EXAMPLE        |
| `CROUTON_TWITTER_ID`                   | Twitter User ID for tweeting              | `3014778437`       |

## Tweet Format

The following variables can be used in tweet body.

| Variable             | Description                                         | Example Value |
| -------------------- | --------------------------------------------------- | ------------- |
| `${number}`          | total number of yesterday tweets                    | `1234`        |
| `${username:number}` | @username to the aggregate (e.g. `${username:1}`)   | `username`    |
| `${date:format}`     | datetime of aggregation (e.g. `${date:YYYY-MM-DD}`) | `2019-07-23`  |
