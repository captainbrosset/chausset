(function() {
  loader = document.createElement('div');
  loader.style.cssText = 'position:fixed;z-index:100010;top:90px;left:50%;width:250px;margin-left:-125px;padding:1em;box-sizing:border-box;font-size:20px;text-align:center;background-color:white;border-radius:10px;box-shadow:0 0 31px #333;';
  loader.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 24 18" enable-background="new 0 0 24 18" xml:space="preserve"><g><circle cx="12" cy="10" r="4"></circle><path d="M22,2h-7V1c0-0.553-0.448-1-1-1h-4C9.448,0,9,0.448,9,1v1H2C0.896,2,0,2.896,0,4v12c0,1.104,0.896,2,2,2h20   c1.104,0,2-0.896,2-2V4C24,2.896,23.104,2,22,2z M12,16c-3.313,0-6-2.687-6-6s2.687-6,6-6s6,2.687,6,6S15.313,16,12,16z"></path></g></svg><br />loading chausset ...';
  loader.id = 'chausset-loader';
  document.body.appendChild(loader);
  document.body.appendChild(document.createElement('script')).src = 'https://raw.github.com/captainbrosset/chausset/master/build/chausset-min.js';
})();