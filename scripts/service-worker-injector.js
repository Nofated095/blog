hexo.extend.injector.register('body_end', '<script>window.addEventListener("load",()=>{const e="1699180247";"serviceWorker"in navigator&&localStorage.getItem("sw.js-version")!=e?(navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){console.log("ServiceWorker registration successful with scope: ",t.scope),localStorage.setItem("sw.js-version",e)}).catch(function(e){console.warn("ServiceWorker registration failed: ",e)}),navigator.serviceWorker.addEventListener("controllerchange",function(){var e=document.querySelector("title");e.innerText="Need update Service Worker - "+e.innerText})):console.log("ServiceWorker already the latest version."),quicklink.listen()})</script>', 'default');

hexo.extend.injector.register('body_end', '<script src="/js/quicklink.js"></script>', 'default');
