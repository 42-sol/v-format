![npm](https://img.shields.io/npm/v/@42sol/v-format)
[![Release](https://github.com/42-sol/v-format/actions/workflows/release.yml/badge.svg)](https://github.com/42-sol/v-format/actions/workflows/release.yml)
[![Vue2](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/)

# Vue input format directive
> Tiny input format library for vue.js based on [cleave.js](https://github.com/nosir/cleave.js)

## Why?

The idea is to provide an easy way to increase input field readability by formatting your typed data. 
By using this library, you won't need to write any mind-blowing regular expressions or mask patterns
to format input text.

However, this isn't meant to replace any validation or mask library, you should still sanitize 
and validate your data in backend.

## Installation

```shell
npm i @42sol/v-format

# or

yarn add @42sol/v-format
```

## Initialization

```javascript
import Vue from 'vue';

// As plugin (globally)
import VueFormat from '@42sol/v-format';
Vue.use(VueFormat);

// Or as a global directive
import { VueFormatDirective } from '@42sol/v-format'
Vue.directive('format', VueFormatDirective);

// Or as a component directive
import { VueFormatDirective } from '@42sol/v-format'

export default {
  directives: {
    format: VueFormatDirective
  }
}
```

## Usage

```javascript
<input type="text" v-model="value" v-format="{ creditCard: true }">
<!-- OR -->
<input type="text" v-model="value" v-format="variableWithOptions">
<!-- OR -->
<input type="text" v-model="value" v-format="numeral">

<!-- OR -->
<InputComponent v-model="value" v-format="{ selector: '.innerInput', creditCard: true }" />
```

## Configuration

All directive options must match [cleave.js](https://github.com/nosir/cleave.js) options. 
See [official documentation](https://github.com/nosir/cleave.js/blob/master/doc/options.md) for details.

### Input selector

You can pass **selector**  option to query nested `<input>` element. 
This can be helpful in components with difficult structure.

Default selector is ```'input'```.
