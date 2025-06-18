import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(ROUTES),
        importProvidersFrom(
            BrowserModule
            // BrowserAnimationsModule,
            // TranslateModule.forRoot({
            //     loader: {
            //         provide: TranslateModule,
            //         useFactory: httpLoaderFactory,
            //         deps: [HttpClient],
            //     },
            // })
        ),
    ],
}).catch(err => console.error(err));
