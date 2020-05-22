<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)



<!-- ABOUT THE PROJECT -->
## About The Project

A really simple wrapper around Redis to make async functions and setting cache expiry easier.

<!-- GETTING STARTED -->
## Getting Started

To get up and running quickly, follow these simple steps.

### Installation
 
1. Clone the easy-redis-cache
```sh
git clone https://github.com/dmsynge/easy-redis-cache.git
```
2. Install NPM packages
```sh
npm install easy-redis-cache -s
```



<!-- USAGE EXAMPLES -->
## Usage

You need to provide an existing configured redis client. For example, use the excellent [node-reids](https://github.com/NodeRedis/node-redis) library.

```js
const redis = require('redis');
const redisClient = redis.createClient(options);

const EasyRedisCache = require('easy-redis-cache');
const rc = new EasyRedisCache(redisClient);
```

**Setting a value:**
```js
let ttl = 3600; //optional: seconds until your cached item will expire.
let value = {foo: 'bar'};
await rc.set('key', value, ttl);
```
If you don't set a ttl value, your key will not expire. 

**Getting a value:**
```js
let result = await rc.get('key');
console.log(result);
//{hello: 'world'}
```

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