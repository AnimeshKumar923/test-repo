# how did I locally resolved error in Operation-Object.json?

## 1st change
change line 219 from 

```json
"$ref": "/components/messages/userSignedUp"
```

to 
```json
"$ref": "#/components/messages/userSignedUp"
```

## 2nd change
and similar changes for line 231

from 


```json
"$ref": "/components/messages/userSignedUpReply"
```

```json
"$ref": "#/components/messages/userSignedUpReply"
```


## 3rd change

remove lines from 217 to 221

Then the file becomes valid in the AsyncAPI Studio


# how did I locally resolved error in Message-Example-Object.json?

Added a placeholder of type array for the example at line 429 in the base doc

```json 
"examples":[]
```

# how did I locally resolved error in Operation-Traits-Object.json?

Added a placeholder of type array for the example at line 231 in the base doc

```json 
"traits":[]
```

# problems in Message-Object, Components-Object

reference to some non-existent external example file

