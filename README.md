## url-record
> A simple, fast and lightweight slug generator. It's a JavaScript port from [nopCommerce](https://github.com/nopSolutions/nopCommerce) UrlRecord service.

[![NPM](https://nodei.co/npm/url-record.png)](https://nodei.co/npm/url-record/)

## Why url-record?
The reason behind this repository is nopCommerce, is an open source ASP.NET Core based ecommerce solution. I just wanted to create a port of the nopCommerce SEO friendly slug generation service which is in production for years and trusted by tens of thousands of stores.

## Installation
`npm install url-record --save`

## Usage

```js
// get required modules
const getSeoFriendlyName = require('url-record')

getSeoFriendlyName('nobodY d0es_it better')
// will return -> nobody-d0es_it-better
```

## Options

| Name              | Type               | Default                             | Description                                                                                                          |
| ---               | ---                | ---                                 | ---                                                                                                                  |
| name         | string | -                                | The string that will be slugified  |
| convertNonWesternChars         | boolean            | true                                | A value indicating whether non western chars should be converted  |
| allowUnicodeCharsInUrls  | boolean            | false                               | A value indicating whether Unicode chars are allowed  |

## Contribution
Contributions and pull requests are kindly welcomed!

## License
This project is licensed under the terms of the [MIT license](https://github.com/hsynlms/url-record/blob/master/LICENSE).
