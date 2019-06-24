ember-split-view-modifier
==============================================================================
Ember element modifier `{{split-view}}` that turns all child elements into resizeable split views. It uses [Split.js](https://split.js.org/) under the hood.


Installation
------------------------------------------------------------------------------

```
ember install ember-split-view-modifier
```


Usage
------------------------------------------------------------------------------

```hbs

<div {{split-view}} class="your-container-class">
  <div></div>
  <div></div>
  <div></div>
</div>

```


## Configuration

The modifier accepts the following options:

| Options        | Type            | Default        | Description                                              |
| -------------- | --------------- | -------------- | -------------------------------------------------------- |
| `sizes`        | Array           |                | Initial sizes of each element in percents or CSS values. |
| `minSize`      | Number or Array | `100`          | Minimum size of each element.                            |
| `expandToMin`  | Boolean         | `false`        | Grow initial sizes to `minSize`                          |
| `gutterSize`   | Number          | `10`           | Gutter size in pixels.                                   |
| `gutterAlign`  | String          | `'center'`     | Gutter alignment between elements.                       |
| `snapOffset`   | Number          | `30`           | Snap to minimum size offset in pixels.                   |
| `dragInterval` | Number          | `1`            | Number of pixels to drag.                                |
| `direction`    | String          | `'horizontal'` | Direction to split: horizontal or vertical.              |
| `cursor`       | String          | `'col-resize'` | Cursor to display while dragging.                        |
| `gutter`       | Function        |                | Called to create each gutter element                     |
| `elementStyle` | Function        |                | Called to set the style of each element.                 |
| `gutterStyle`  | Function        |                | Called to set the style of the gutter.                   |
| `onDrag`       | Function        |                | Callback on drag.                                        |
| `onDragStart`  | Function        |                | Callback on drag start.                                  |
| `onDragEnd`    | Function        |                | Callback on drag end.                                    |

Refer to [Split.js documentation](https://github.com/nathancahill/split/tree/master/packages/splitjs#documentation) for more details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).