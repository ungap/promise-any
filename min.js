var any=Promise.any||function(n){return new Promise(function(r,t,o,i){o=[],i=n.map(function(n,e){return Promise.resolve(n).then(r,function(n){return o[e]=n,--i||t(o)})}).length})};