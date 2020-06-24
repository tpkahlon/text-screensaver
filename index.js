class ScreenSaver {
  constructor(ele, text, speed, options) {
    this.ele = ele;
    this.text = text;
    this.speed = speed;
    this.options = options;
    this.create = () => {
      const element = document.createElement('div');

      const box = document.createElement('div');
      const boxChild = document.createElement('div');
      const textWrapper = document.createElement('div');

      box.classList.add('box', 'box--screensaver');
      boxChild.classList.add('box__child', 'box__child--screensaver');
      textWrapper.classList.add('box__text', 'box__text-screensaver');

      element.style.cssText = `
        display: block;
        height: ${options.height};
        width:  ${options.width};
      `;
      box.style.cssText = `
        margin: 0;
        overflow: hidden;
        height: inherit;
        width: inherit;
        background: ${options.background};
      `;
      boxChild.style.cssText = `
        display: inline-flex;
      `;
      textWrapper.style.cssText = options.text;

      box.appendChild(boxChild);
      boxChild.appendChild(textWrapper);
      textWrapper.textContent = this.text;
      element.appendChild(box);
      ele.appendChild(element);

      const parentWidth = element.offsetWidth;
      const parentHeight = element.offsetHeight;

      let x = 0,
        y = 0,
        reverseX = false,
        reverseY = false;
      setInterval(() => {
        x === parentWidth - textWrapper.offsetWidth
          ? (x--, (reverseX = true))
          : x === 0
          ? (x++, (reverseX = false))
          : reverseX
          ? x--
          : x++;

        y === parentHeight - textWrapper.offsetHeight
          ? (y--, (reverseY = true))
          : y === 0
          ? (y++, (reverseY = false))
          : reverseY
          ? y--
          : y++;
        textWrapper.style.transform = `translate(${x}px, ${y}px)`;
        textWrapper.style.background = `transparent`;
      }, this.speed);
      return element;
    };
  }
}

export default ScreenSaver;
