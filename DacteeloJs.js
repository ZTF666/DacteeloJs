function ZTF(selector) {
    const self = {
        el: document.querySelector(selector),
        html: () => self.el.innerText,
        on: (event, callback) => {
            self.el.addEventListener(event, callback)
        },
        attr: (name, value) => {
            if (value == null) self.el.getAttribute(name)
            else self.el.setAttribute(name, value)
        },
        type: (speed, delspeed) => {

            let i = 0;
            let txt = '\xa0' + self.el.innerHTML + '\xa0';
            self.el.innerHTML = ''

            function go() {

                if (i < txt.length) {
                    self.el.innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(go, speed)

                } else {
                    setTimeout(backtrack, speed)
                }
            }
            go()

            function backtrack() {
                if (i >= 0) {
                    let tmp = txt.substring(0, i)
                    self.el.innerHTML = tmp;
                    i--
                    setTimeout(backtrack, speed - delspeed)
                } else {
                    setTimeout(go, speed)
                }
            }
        },
        blink: (interval) => {

            setInterval(function () {
                self.el.style.display = (self.el.style.display == 'none' ? '' : 'none');
            }, interval);

        }

    }
    return self
}