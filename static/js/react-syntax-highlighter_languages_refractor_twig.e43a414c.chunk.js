"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8827,3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,i){if(t.language===a){var r=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof i&&!i(e))return e;for(var o,s=r.length;-1!==t.code.indexOf(o=n(a,s));)++s;return r[s]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,i=Object.keys(t.tokenStack);!function r(s){for(var u=0;u<s.length&&!(o>=i.length);u++){var l=s[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var g=i[o],c=t.tokenStack[g],p="string"===typeof l?l:l.content,f=n(a,g),d=p.indexOf(f);if(d>-1){++o;var k=p.substring(0,d),b=new e.Token(a,e.tokenize(c,t.grammar),"language-"+a,c),m=p.substring(d+f.length),h=[];k&&h.push.apply(h,r([k])),h.push(b),m&&h.push.apply(h,r([m])),"string"===typeof l?s.splice.apply(s,[u,1].concat(h)):l.content=h}}else l.content&&r(l.content)}return s}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]},4411:function(e,n,t){var a=t(595);function o(e){e.register(a),e.languages.twig={comment:/^\{#[\s\S]*?#\}$/,"tag-name":{pattern:/(^\{%-?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%]-?|-?[%}]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,inside:{punctuation:/^['"]|['"]$/}},keyword:/\b(?:even|if|odd)\b/,boolean:/\b(?:false|null|true)\b/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][-+]?\d+)?/,operator:[{pattern:/(\s)(?:and|b-and|b-or|b-xor|ends with|in|is|matches|not|or|same as|starts with)(?=\s)/,lookbehind:!0},/[=<>]=?|!=|\*\*?|\/\/?|\?:?|[-+~%|]/],punctuation:/[()\[\]{}:.,]/},e.hooks.add("before-tokenize",(function(n){if("twig"===n.language){e.languages["markup-templating"].buildPlaceholders(n,"twig",/\{(?:#[\s\S]*?#|%[\s\S]*?%|\{[\s\S]*?\})\}/g)}})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"twig")}))}e.exports=o,o.displayName="twig",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_twig.e43a414c.chunk.js.map