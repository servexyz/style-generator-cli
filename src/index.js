/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2017-12-20T17:12:40-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2017-12-27T14:38:51-08:00
 */

 #!/usr/bin/env node
 'use strict';
 const meow = require('meow');
 const foo = require('.');

 const cli = meow(`
 	Usage
 	  $ foo <input>

 	Options
 	  --rainbow, -r  Include a rainbow

 	Examples
 	  $ foo unicorns --rainbow
 	  🌈 unicorns 🌈
 `, {
 	flags: {
 		rainbow: {
 			type: 'boolean',
 			alias: 'r'
 		}
 	}
 });
 /*
 {
 	input: ['unicorns'],
 	flags: {rainbow: true},
 	...
 }
 */

 foo(cli.input[0], cli.flags);
