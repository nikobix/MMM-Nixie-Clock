# MMM-Nixie-Clock

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Todo: Create a simple virtual Nixie clock

## Using the module - moment.js

To use this module, add the following configuration block to the modules array in the `config/config.js` file:
```js
var config = {
    modules: [
        {
            module: 'MMM-Nixie-Clock',
            position:"top_left",
            size: 75,            ** CSS automatically sizes the image size - 10%
        }
    ]
}
```


