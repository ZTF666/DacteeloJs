# DacteeloJs

A small 💩 library that gives your text that typewriter effect and makes it blink too 😤

## How to use

- **Typing effect**

```javascript
ZTF(elementID).type(SET_SPEED_TYPING, SET_SPEED_DELETING);
```

![Screenshot](demo/typing.gif)

- **Blinking Effect**

```javascript
ZTF(Element_ID).type(SET_INTERVAL_BLINKING);
```

![Screenshot](demo/blinking.gif)

- **Custom Css**
<details>
  
  <p>For a more fancy look add the following css to animate the cursor</p>
</details>

```css
.my-fancy-cursor {
  color: rgb(255, 255, 255);
  animation: blink 0.5s ease infinite;
  opacity: 0;
}

@keyframes blink {
  100% {
    opacity: 1;
  }
}
```

- **Example with the custom Css**

```html
<span id="YOUR_ID">i'm still learning please be kind </span>
<span class="my-fancy-cursor">|</span>
<script>
  ZTF(elementID).type(SET_SPEED_TYPING, SET_SPEED_DELETING);
</script>
```

## Support

```
Any help improving this and adding more stuff is welcomed ! i'm still learning JS .
```
