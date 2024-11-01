import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes'; // Import routing providers
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    appRoutingProviders, // Add routing providers here
    BrowserAnimationsModule, // Add BrowserAnimationsModule if needed for Material components
  ],
}).catch(err => console.error(err));
