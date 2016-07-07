import {AuthService} from './services/auth.service';
import {CouchbaseService} from './services/couchbase.service';
import {PlayerService} from './services/player.service';
import {PlaylistService} from './services/playlist.service';
import {SearchService} from './services/search.service';
import {ShoutoutService} from './services/shoutout.service';

export const SHOUTOUTPLAY_PROVIDERS: any[] = [
  AuthService,
  CouchbaseService,
  PlayerService,
  PlaylistService,
  SearchService,
  ShoutoutService
];

// models
export * from './models/playlist.model';
export * from './models/shoutout.model';
export * from './models/track.model';

// services
export * from './services/auth.service';
export * from './services/couchbase.service';
export * from './services/player.service';
export * from './services/playlist.service';
export * from './services/search.service';
export * from './services/shoutout.service';

// components
export * from './components/empty.component';