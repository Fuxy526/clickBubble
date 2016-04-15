##clickBubble
clickBubble is a simple jquery plugin.

Clicking on the target area, an animated bubble-liked circle will appear and fade soon.

![](images/sample.gif)

##Usage
include jQuery and the plugin on the page

```html
<script type="text/javascript" src="js/jquery-1.12.3.min.js"></script>
<script type="text/javascript" src="js/jquery.clickBubble.min.js"></script>
```

use clickBubble funciton on the target area

```html
<script>
	$('html').clickBubble();
</script>
```

##Options

| Option        | Value         | Desciption  |
| :------------- |:-------------| :-----|
| color | String | bubbles' color, you can use either color code or color name, '#ff0000' or 'red'. `default: '#000'` |
| size | Interger (px) | bubbles' width and height. `default: 20` |
| time | Interger (ms) | bubbles' fade time. `default: 500` |
| borderWidth | Interger (px) | bubbles' border width. `default: 2` |

plugin activation with options

```html
<script>
	$('html').clickBubble({
		color: 'red',
		size: 40,
		time: 1000,
		borderWidth: 3
	});
</script>
```

##License

This plugin is licensed under [MIT](LICENSE)
