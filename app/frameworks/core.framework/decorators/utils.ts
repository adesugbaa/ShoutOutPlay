// angular
import {Component, ChangeDetectionStrategy} from 'angular2/core';

// nativescript
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import {NS_DIRECTIVES} from "nativescript-angular/directives";

// libs
import {TNSFontIconPipe} from 'nativescript-ng2-fonticon/nativescript-ng2-fonticon';

declare var Reflect: any;
const _reflect: any = Reflect;

export class DecoratorUtils {
  public static getMetadata(metadata: any = {}, customDecoratorMetadata?: any) {

    /**
     * The following allows default component metadata to be configured
     * For instance, here we make `TNSFontIconPipe` available for all our components
     */
    // default directives
    let DIRECTIVES: any[] = [
      NS_ROUTER_DIRECTIVES,
      NS_DIRECTIVES
    ];
    // default pipes
    let PIPES: any[] = [TNSFontIconPipe];   
    
    // custom decorator options
    if (customDecoratorMetadata) {
      if (customDecoratorMetadata.directives) {
        DIRECTIVES.push(...customDecoratorMetadata.directives); 
      }
      if (customDecoratorMetadata.pipes) {
        PIPES.push(...customDecoratorMetadata.pipes); 
      }
    }
    
    metadata.directives = metadata.directives ? metadata.directives.concat(DIRECTIVES) : DIRECTIVES;
    metadata.pipes = metadata.pipes ? metadata.pipes.concat(PIPES) : PIPES;
    
    if (metadata.changeDetection) {
      metadata.changeDetection = metadata.changeDetection;
    } else {
      // default OnPush
      metadata.changeDetection = ChangeDetectionStrategy.OnPush;
    }
    
    if (metadata.encapsulation) {
      metadata.encapsulation = metadata.encapsulation;
    }
    
    // initialize anything 
    if (metadata.init) {
      metadata.init();
    }   

    return metadata;
  }
  
  public static annotateComponent(cls: any, metadata: any = {}, customDecoratorMetadata?: any) {
    let annotations = _reflect.getMetadata('annotations', cls) || [];
    annotations.push(new Component(DecoratorUtils.getMetadata(metadata, customDecoratorMetadata)));
    _reflect.defineMetadata('annotations', annotations, cls);
    return cls;
  }
}