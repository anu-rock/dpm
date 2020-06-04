const PACKAGE_JSON_TEMPLATE = `{
  "name": "deno-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "scripts": {
    "test": "echo 'Error: no test specified' && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "MIT"
}
`;

// Create package.json in current working directory
const encoder = new TextEncoder();
const content = encoder.encode(PACKAGE_JSON_TEMPLATE);
await Deno.writeFile('package.json', content);

// Output result
const path = await Deno.realPath('package.json');
console.log(`Wrote to ${path}:`);
console.log('');
console.log(PACKAGE_JSON_TEMPLATE);
console.log('');
