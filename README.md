<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- ABOUT THE PROJECT -->
A really simple wrapper around `node-redis` to make cache expiry easier and provide a promise/async interface.

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Getting Started](#getting-started)
  * [Installation](#installation)
  * [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)

<!-- GETTING STARTED -->
## Getting Started

To get up and running quickly, follow these simple steps.

### Installation

```sh
npm install easy-redis-cache -s
```

You need to already have an existing installed and configured instance of [node-redis](https://github.com/NodeRedis/node-redis) in your project:

```js
const redis = require('redis');
const redisClient = redis.createClient(options);

const EasyRedisCache = require('easy-redis-cache');
const cache = new EasyRedisCache(redisClient);
```

<!-- USAGE EXAMPLES -->
### Usage

There are only two methods:

**Set a value:**
Both key and value are required. Value must be capable of being `JSON.stringify`'d. Otherwise, an error will be thrown.

```js
let ttl = 3600; //optional: seconds until your cached item will expire.
let value = {foo: 'bar'};
await cache.set('key', value, ttl);
```
If you don't set a ttl value, your key will not expire. ttl must be an integer (representing seconds). 

In many cases, you won't want or need to `await` setting cache values.

**Get a value:**
```js
let result = await cache.get('key');
console.log(result);
//{hello: 'world'}
```

### Errors:

This is a very thin wrapper on top of `node-redis`. For information on error handling, please refer to that [documentation](https://github.com/NodeRedis/node-redis).

If in doubt, check out this source code. It's is very short and should be easy to read.

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/dmsynge/easy-redis-cache/issues) for a list of proposed features (and known issues).

If you have any issues, please submit a PR. 

<!-- CONTRIBUTING -->
## Contributing

This is a pretty simple package, but any contributions you make are **greatly appreciated**. Just fork and submit a PR :) 

<!-- LICENSE -->
## License
Distributed under the MIT License.