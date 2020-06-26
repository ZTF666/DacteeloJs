# DacteeloJs

<div align="center">
<p>A small 💩 library that gives your text that typewriter effect and makes it blink too 😤</p>

</div>

## How to use

- **Typing effect**

```javascript
ZTF(elementID).type(SET_SPEED_TYPING, SET_SPEED_DELETING);
```

<div align="center">
<img src="demo/dact.gif"   alt="DacteeloJS">
</div>

- **Blinking Effect**

```javascript
ZTF(Element_ID).type(SET_INTERVAL_BLINKING);
```

<div align="center">
<img src="demo/blinking.gif"   alt="Blinking">
</div>

- **Custom Css for the typing effect**

<div align="center">
  <p>For a more fancy look add the following css to animate the cursor</p>
  <p>The cursor won't appear by itself 🧙‍♂️, you should put it in a span or
  whatever tag you like as long as it's gonna be inline with the text. </p>
  <p>👉  |  👈</p>
  <p>Copy this in you css tag or file Or include the file i added , do as you please.</p>
</div>

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

<div align="center">
<p>So far you can only target one element per call , bummer i know ...</p>
<p>hopefully, as i expand my knowledge in js , i'll figure out a way to</p>
<p>fix this issue 😫 .</p>
</div>

## Support

```
Any help improving this and adding more stuff is welcomed ! i'm still learning JS .
```

## Contact

```
you can contact me at ZTF666@protonmail.ch or via my portfolio

```

<div align="center">

<table>
  <tr>
    <td align="center"><a href="https://ztfportfolio.web.app/" target='_blank'><img src="https://avatars1.githubusercontent.com/u/32502988?v=4" width="100px;" alt=""/><br /><sub><b>ZTF666</b></sub></a></td>
  </tr>
</table>

</div>

## License

**💎DacteeloJS💎** released under the [MIT](LICENSE) License.
<br><br>

<div align="center">
<strong><p>Made with 💘 by a 👨‍💻 on a 💻 | 2020 | ZTF666 - N.EA</p> </strong>
</div>
