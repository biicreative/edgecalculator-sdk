# Edge Calculator SDK

[![Build Status](https://travis-ci.org/biicreative/edgecalculator-sdk.svg?branch=master)](https://travis-ci.org/biicreative/edgecalculator)
[![npm version](https://badge.fury.io/js/edgecalculator.svg)](https://www.npmjs.com/package/edgecalculator)

## Usage

```
const SDK = require('edgecalculator')
const client = new SDK.Client({
    baseUrl: "https://GATEWAY"
})

const problem = client.problem(
    "Jack has 8 cats. Jill has 7 cats. How many cats are there in all?"
)

const answer = await problem.solve();
// 15 cats
```

## License

MIT
