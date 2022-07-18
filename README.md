# Test for Bitlabs


To run the app locally use the next command

```
yarn start
```

You can run tests using
```
yarn test
```

## Overview

I tried to use as less as possible libraries and write my own implementation of some functions. It's not perfect but it works well.

In the app was used standard react/redux stack but the default thunk middleware was replaced with sagas (couse I prefer it more).

## Areas for improvement

I could add aliases for common used folders to make imports more pretty. It also makes sense to setup linter/prettier.
