[![npm version](https://badge.fury.io/js/slng.svg)](https://badge.fury.io/js/slng) [![Build Status](https://travis-ci.org/5-gwoap/slng-node.svg?branch=master)](https://travis-ci.org/5-gwoap/slng-node)

# Slng - The modern slang cli tool
> Get hip or die trying

### Installation
`slng` is on npm! Check out out [here](https://www.npmjs.com/package/slng)

```
npm install -g slng
```

#### Usage
Once installed, you should be able to call with:

##### Standard Use
```
slng <search string>
```

slng will return (up to) the first 3 results by default.
*ability to change number of results coming soon*

##### Random/Shuffle Search
```
slng -R
slng --random
```

When passing the random flag, slng will search a random word and return (up to) the first 3 results by default.
*ability to change number of results coming soon*

**NOTE** Random flag does **not** work if you pass a phrase; meaning that slng will search for the phrase.
e.g. `slng -R gucci` and `slng --random gucci` will return the results for 'gucci'.

#### Contributing
If you see an issue with slng, feel free to create an issue for review. If we can reproduce the issue, we'll flag the ticket. Check out the rest of our [contributing guidelines](./CONTRIBUTING.md) for more information.

### License
[MIT](https://github.com/5-gwoap/slng-node/blob/master/LICENSE)
