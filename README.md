# Text Screensaver

A simple text screensaver that resembles with Windows XP screensaver with text.

## Install

- `npm install text-screensaver`
- `yarn add text-screensaver`

## Example

Play with sandbox example here: [Demo](https://codesandbox.io/s/magical-aryabhata-gq9c1?file=/src/index.js)

## Options

You can pass following parameters to Text Screensaver in order to generate custom screensaver box

| Attributes       | Values                                   |
| ---------------- | ---------------------------------------- |
| text / String    | 'Hello World'                            |
| speed / Number   | Speed of text in milliseconds            |
| options / Object | See _options_ object configuration below |

You can pass following parameters to Options object in order to generate custom screensaver box

| Attributes                                                                         | Values                                        |
| ---------------------------------------------------------------------------------- | --------------------------------------------- |
| width / String                                                                     | 300px or 100vw                                |
| height / String                                                                    | 300px or 100vh                                |
| [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background) / String | content-box radial-gradient(crimson, skyblue) |
| text / String / CSSText                                                            | See value below                               |

Example of CSSText fot _text_ attribute:

```css
margin: 0;
color: red;
line-height: 1;
letter-spacing: -1.4px;
font-size: 3rem;
font-weight: 100;
font-family: 'Arial', sans-serif;
display: inline-block;
```

## Events

- create() method return HTML element
