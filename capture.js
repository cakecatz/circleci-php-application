var Nightmare = require('nightmare');
var animatedGif = require('nightmare-animated-gif');
var nightmare = Nightmare();

nightmare
  .goto('http://www.mysite.com')
  .use(animatedGif.captureAs('form'))
  .type('[name=message]', 'Hello, World')
  .use(animatedGif.captureAs('form'))
  .click('[type=submit]')
  .wait('body')
  .use(animatedGif.captureAs('form'))
  .end()
  .then(() => {
    animatedGif.generate('form', './form.gif', {
      repeat: 0, // forever
      delay: 1000,
      quality: 10,
    });
  });
