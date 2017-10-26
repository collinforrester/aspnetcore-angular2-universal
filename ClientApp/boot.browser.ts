import './polyfills/browser.polyfills';
import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module.browser';

const rootElemTagName = 'app'; // Update this if you change your root component selector

// // Enable either Hot Module Reloading or production mode
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => {
        modulePromise.then(appModule => appModule.destroy());
    });
} else {
    enableProdMode();
}

const artificialNetworkDelay = 5000;

const modulePromise: Promise<NgModuleRef<AppModule>> = new Promise((resolve) => {
    setTimeout(() => {
        resolve(platformBrowserDynamic().bootstrapModule(AppModule));
    }, artificialNetworkDelay);
});
