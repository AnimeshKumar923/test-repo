# how did I locally resolved error in [Operation-Object.json](https://github.com/asyncapi/spec/blob/ced626f6f6abf80e128216793a1bdc656c36c059/scripts/validation/updated-docs/Operation-Object.json)?

## 1st change
change line 219 in the document itself from 

```json
"$ref": "/components/messages/userSignedUp"
```

to 
```json
"$ref": "#/components/messages/userSignedUp"
```

## 2nd change
and similar changes for line 231 in the document

from 


```json
"$ref": "/components/messages/userSignedUpReply"
```

```json
"$ref": "#/components/messages/userSignedUpReply"
```


## 3rd change

remove lines from 217 to 221 in the document

Then the file becomes valid in the AsyncAPI Studio

Try it [here](https://tinyurl.com/operation-object)

# how did I locally resolved error in [Message-Example-Object.json](https://github.com/asyncapi/spec/blob/ced626f6f6abf80e128216793a1bdc656c36c059/scripts/validation/updated-docs/Message-Example-Object.json)?

Added a placeholder of type array for the example at line 429 in the base doc

```json 
"examples":[]
```
applied it via this [commit](https://github.com/asyncapi/spec/pull/1059/commits/6f18cbc36767bbce74220947b9cd9fc570c21b62)

# how did I locally resolved error in [Operation-Traits-Object.json](https://github.com/asyncapi/spec/blob/ced626f6f6abf80e128216793a1bdc656c36c059/scripts/validation/updated-docs/Operation-Traits-Object.json)?

Added a placeholder of type array for the example at line 231 in the base doc

```json 
"traits":[]
```
applied it via this [commit](https://github.com/asyncapi/spec/pull/1059/commits/6f18cbc36767bbce74220947b9cd9fc570c21b62)

# problems in [Message-Object](https://github.com/asyncapi/spec/blob/ced626f6f6abf80e128216793a1bdc656c36c059/scripts/validation/updated-docs/Message-Object.json)

```bash

Error:  481:21  error  invalid-ref  ENOENT: no such file or directory, open '/home/runner/work/asyncapi-spec/asyncapi-spec/scripts/validation/updated-docs/path/to/user-create.avsc'  components.messages.userSignedUp.payload.schema.$ref

```

# problems in [Components-Object](https://github.com/asyncapi/spec/blob/ced626f6f6abf80e128216793a1bdc656c36c059/scripts/validation/updated-docs/Components-Object.json)

```bash
Error:  248:21  error  asyncapi-document-resolved  "AvroExample" property must match "then" schema                                                                                                   components.schemas.AvroExample
Error:  250:18  error  asyncapi-document-resolved  "schema" property must match exactly one schema in oneOf                                                                                          components.schemas.AvroExample.schema
Error:  264:19  error  invalid-ref                 ENOENT: no such file or directory, open '/home/runner/work/asyncapi-spec/asyncapi-spec/scripts/validation/updated-docs/path/to/user-create.avsc'  components.schemas.AvroExample.schema.$ref

```

as far as I understand, it's referencing to some non-existent external example file

---

# Problems with [Security-Scheme-OAuth-Flow-Object.json](https://github.com/asyncapi/spec/blob/ced626f6f6abf80e128216793a1bdc656c36c059/scripts/validation/updated-docs/Security-Scheme-OAuth-Flow-Object.json)


```bash
File /home/runner/work/asyncapi-spec/asyncapi-spec/scripts/validation/updated-docs/Security-Scheme-OAuth-Flow-Object.json and/or referenced documents have governance issues.
Errors 
/home/runner/work/asyncapi-spec/asyncapi-spec/scripts/validation/updated-docs/Security-Scheme-OAuth-Flow-Object.json
Error:  596:15  error  asyncapi-document-resolved  "0" property must have required property "in"                    components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "0" property must not be valid                                   components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "0" property must have required property "scheme"                components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "0" property must have required property "name"                  components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "0" property must have required property "openIdConnectUrl"      components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "oauth" property must have required property "in"                components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "oauth" property must not be valid                               components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "oauth" property must have required property "scheme"            components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "oauth" property must have required property "name"              components.securitySchemes.oauth
Error:  596:15  error  asyncapi-document-resolved  "oauth" property must have required property "openIdConnectUrl"  components.securitySchemes.oauth
Error:  599:17  error  asyncapi-document-resolved  Property "flows" is not expected to be here                      components.securitySchemes.oauth.flows
Error:  600:31  error  asyncapi-document-resolved  "clientCredentials" property must not be valid                   components.securitySchemes.oauth.flows.clientCredentials
Error:  610:18  error  asyncapi-document-resolved  Property "scopes" is not expected to be here                     components.securitySchemes.oauth.scopes

✖ 13 problems (13 errors, 0 warnings, 0 infos, 0 hints)
```

## Solution for this error
For the resolution, what I found out from my observation is that if we remove this line:

```json
"authorizationUrl": "https://example.com/api/oauth/dialog",
```
from the examples in the spec, the files become valid.

and we remove the same line from the yaml file as well.

I tried removing this line from the invalid document in the Studio validator and the file became valid

Maybe I'm wrong and we need to modify something else? I don't know as of now...