self.addEventListener('message', function(e) {
  var source = e.data.source;
  if (e.data.beautify) {
    self._window = self.window;
    self.window = {};
    self.importScripts('https://aprendiendoconxsplus.github.io/demoapp/proyecto-pro/d30bfusc4t0r/beautify.min.js');
    source = self.window.js_beautify(source, {
      unescape_strings: true,
      jslint_happy: true
    });
    self.window = self._window;
  }
  self.importScripts('https://aprendiendoconxsplus.github.io/demoapp/proyecto-pro/d30bfusc4t0r/highlight.min.js');
  source = self.hljs.highlight('javascript', source).value;
  source = source.split('\n');
  source = source.join('</code><code>');
  source = '<code>' + source + '</code>';
  self.postMessage(source);
});