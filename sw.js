importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"d4337ff16292cea2988829d88bb2a15b","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"c8ac711836366b48c7d73ae90b75d153","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"51392554bd6f04d452c6c2bf019e8812","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"9d6642050b0e413d6130954bfffccf5a","url":"feedback.html"},{"revision":"82366218cc10ddeb339ce03073197e07","url":"images/Screenshot_20230214_121413.png"},{"revision":"4b775ce63cceea1b7c4ac97e8b2262e5","url":"images/Screenshot_20230214_121859.png"},{"revision":"62d8c610c12b517f824c387872e101ac","url":"images/Screenshot_20230214_121931.png"},{"revision":"d95c1ed10cea36dbfd1656b2963bef42","url":"images/Screenshot_20230214_122145.png"},{"revision":"9caec2adac45280e72757b949b6f0bb2","url":"images/Screenshot_20230214_122342.png"},{"revision":"84628a537bfd15f662f0ac9bda69ae43","url":"images/Screenshot_20230228_095655.png"},{"revision":"e679d7f3942714e059ed016669a9f3e8","url":"index.html"},{"revision":"f5d1fd6b68654b85212fd163479b58c8","url":"performance-report.html"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"a3be70c0ce4e372ed8120a136306b2a2","url":"posttest.html"},{"revision":"05eff4374dda09959aacfdf9ea2599a8","url":"posttest.json"},{"revision":"cf9c25709a01f4756e094d912a41e5e9","url":"pretest.html"},{"revision":"cacea9b881164422617ab7dc54d13126","url":"pretest.json"},{"revision":"a948706cd2891896b332d42a426fc3d5","url":"procedure.html"},{"revision":"4b26482ec991b2355d5f2e369be0258c","url":"references.html"},{"revision":"d3d91009ed090cc10ad522ffe093f463","url":"simulation.html"},{"revision":"707ab833430ab6de6cb18bd1c53cacf8","url":"simulation/Asynchronous.html"},{"revision":"b58ca4270cf1ff2b901159739d34e169","url":"simulation/css/Asynchronous.css"},{"revision":"dbe2e127e6091772b2af32f9c6b10ed9","url":"simulation/css/Dcmachine.css"},{"revision":"e4241659d5880e6a448ff9981b712c5e","url":"simulation/css/hmm.css"},{"revision":"a16561f7fa2b3219a511211e8c7b5481","url":"simulation/css/index.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"20adb38e0a8ca0c9c7780be7164fe940","url":"simulation/DCMachine.html"},{"revision":"a5240b6091d4c4e7fcf822de8ecca96e","url":"simulation/index.html"},{"revision":"bfccf8268252f7e4572bce621199ffb1","url":"simulation/js/main.js"},{"revision":"84628a537bfd15f662f0ac9bda69ae43","url":"simulation/Screenshot_20230228_095655.png"},{"revision":"8aa4d54795622359c3aa0f7515911e6d","url":"simulation/Single.html"},{"revision":"2d90fcb994bf716542bf50221ffa415b","url":"simulation/Synchronous.html"},{"revision":"fdb1fd8326dd1cb82a8274812d4531ca","url":"simulation/Three.html"},{"revision":"3f2aa2b5502c805ef2056e22beb80bf4","url":"theory.html"},{"revision":"87689b6a0d083373cc75adfc0c31c5ce","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );