# MMM-Nixie-Clock

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Todo: Add variety of Nixie images

![alt text](/img/MMM-Nixie-Clock.jpg)

This module will float over other moudules, so you may need to adjust the position in the config file.

## Using the module - moment.js
Images found at:
(c) 2007-08 Cestmir Hybl, cestmir.hybl@nustep.net
http://cestmir.freeside.sk/projects/dhtml-nixie-display
and 
https://github.com/McOrts/M5StickC_Nixie_tube_Clock

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


