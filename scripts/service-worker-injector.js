hexo.extend.injector.register('head_begin', '<link rel="preconnect" href="https://cdn.staticfile.org" />', 'default');

hexo.extend.injector.register('body_end', '<script>window.addEventListener("load",()=>{const r="1699180247";"serviceWorker"in navigator&&localStorage.getItem("sw.js-version")!=r?(navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(e){console.log("ServiceWorker registration successful with scope: ",e.scope),localStorage.setItem("sw.js-version",r)}).catch(function(e){console.warn("ServiceWorker registration failed: ",e)}),navigator.serviceWorker.addEventListener("controllerchange",function(){var e=document.querySelector("title");e.innerText="Need update Service Worker - "+e.innerText})):console.log("ServiceWorker already the latest version."),quicklink.listen()})</script>', 'default');

hexo.extend.injector.register('body_end', '<script async src="/js/quicklink.js"></script>', 'default');

hexo.extend.injector.register('body_end', '<script src="/js/pjax.min.js"></script>', 'default');

hexo.extend.injector.register('body_end', '<script>var pjax=new Pjax({selectors:["title", ".order-2", ".column-left", ".column-right"]});</script>', 'default');