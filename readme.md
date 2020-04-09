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

- **Custom Css for the typing effect**
<details>
  
  <p>For a more fancy look add the following css to animate the cursor</p>
  <p>The cursor won't appear by itself 🧙‍♂️, you should put it in a span or
  whatever tag you like as long as it's gonna be inline with the text. </p>
  <p>👉  |  👈</p>
  <p>Copy this in you css tag or file Or include the file i added , do as you please.</p>
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

## LIMITATIONS :

```
So far you can onlytarget one element per call , bummer i know ...
hopefully, as i expand my knowledge in js , i'll figure out a way to
fix this issue 😫 .
```

## Support

```
Any help improving this and adding more stuff is welcomed ! i'm still learning JS .
```

## Contact me

```
you can contact me at ZTF666@protonmail.ch or via my portfolio
```

- **💎** [Portfolio](https://ztfportfolio.web.app/) **💎**

```
Made with 💘 by a 👨‍💻 on a 💻 | 2020 | ZTF666
```
