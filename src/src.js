import './styles.scss';
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js').then(function(registration) {
            console.log('service worker was successfully initialised');
        }, function(error) {
            console.log('error while sw init ' + error)
        });
       console.log('hey there in load function');
    });
}