import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// MODULES
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetFirmwareModule } from './get-firmware/get-firmware.module';
import { CreateFirmwareModule } from './create-firmware/create-firmware.module';
import { UpdateFirmwareModule } from './update-firmware/update-firmware.module';
import { DeleteFirmwareModule } from './delete-firmware/delete-firmware.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GetFirmwareModule,
    CreateFirmwareModule,
    UpdateFirmwareModule,
    DeleteFirmwareModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
