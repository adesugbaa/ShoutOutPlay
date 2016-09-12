// nativescript
import { NativeScriptModule } from 'nativescript-angular/platform';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptHttpModule } from 'nativescript-angular/http';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { SIDEDRAWER_PROVIDERS, SIDEDRAWER_DIRECTIVES } from "nativescript-telerik-ui-pro/sidedrawer/angular";
import { LISTVIEW_PROVIDERS, LISTVIEW_DIRECTIVES } from 'nativescript-telerik-ui-pro/listview/angular';

// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// libs
import { TNSFontIconService, TNSFontIconPipe, TNSFontIconPurePipe } from 'nativescript-ng2-fonticon';

// feature module components
import {MainActionBarComponent} from '../shared/shoutoutplay/components/actionbar.component';
import {PlaylistActionBarComponent} from '../shared/shoutoutplay/components/playlist-actionbar.component';
import {EmptyComponent} from '../shared/shoutoutplay/components/empty.component';

// app
import {HomeComponent} from './home/home.component';
import {IntroComponent} from './intro/intro.component';
import {PlayerControlsComponent} from './player/player-controls.component';
import {PlayerFullComponent} from './player/player-full.component';
import {PlaylistChooserComponent} from './playlist/playlist-chooser.component';
import {PlaylistDetailComponent} from './playlist/playlist-detail.component';
import {PlaylistComponent} from './playlist/playlist.component';
import {RecordComponent} from './record/record.component';
import {TrackChooserComponent} from './record/track-chooser.component';
import {IntegrationsComponent} from './search/integrations.component';
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './settings/about.component';
import {GeneralComponent} from './settings/general.component';
import {HelpComponent} from './settings/help.component';
import {ThemeComponent} from './settings/theme.component';
import {VideoComponent} from './settings/video.component';
import {ShoutOutDetailComponent} from './shoutout/shoutout-detail.component';
import {ShoutOutListComponent} from './shoutout/shoutout-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      { path: "", component: SearchComponent },
      { path: "playlist", component: PlaylistComponent },
      { path: "shoutout", component: ShoutOutListComponent },
      { path: "theme", component: ThemeComponent },
      { path: "general", component: GeneralComponent },
      { path: "help", component: HelpComponent },
      { path: "about", component: AboutComponent }
    ]
  },   
  { path: "intro", component: IntroComponent },
  { path: "record", component: RecordComponent },
  { path: "playlist/:id", component: PlaylistDetailComponent }
];

export const ENTRY_COMPONENTS: any[] = [
  HomeComponent,
  SearchComponent,
  PlaylistComponent,
  ShoutOutListComponent,
  ThemeComponent,
  GeneralComponent,
  HelpComponent,
  AboutComponent,
  IntroComponent,
  RecordComponent,
  PlaylistDetailComponent
];

export const AUX_COMPONENTS: any[] = [
  PlayerControlsComponent,
  PlayerFullComponent,
  PlaylistChooserComponent,
  TrackChooserComponent,
  VideoComponent,
  ShoutOutDetailComponent,
  IntegrationsComponent,
  MainActionBarComponent,
  PlaylistActionBarComponent,
  EmptyComponent
]

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule
  ],
  entryComponents: [
    AUX_COMPONENTS
  ],
  declarations: [
    TNSFontIconPipe,
    TNSFontIconPurePipe,
    SIDEDRAWER_DIRECTIVES,
    LISTVIEW_DIRECTIVES,
    AUX_COMPONENTS
  ],
  exports: [
    TNSFontIconPipe,
    TNSFontIconPurePipe,
    SIDEDRAWER_DIRECTIVES,
    LISTVIEW_DIRECTIVES,
    AUX_COMPONENTS,
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule
  ],
  providers: [
    SIDEDRAWER_PROVIDERS,
    LISTVIEW_PROVIDERS,
    { provide: TNSFontIconService, useFactory: () => {
        return new TNSFontIconService({
          'fa': 'font-awesome.css'
        });
      }
    }
  ]
})
export class ComponentsModule {

}