import { Component, ViewChild, ViewContainerRef, ɵrenderComponent as renderComponent, Inject, Injector, ComponentFactoryResolver } from '@angular/core';
import {log} from '@mfe1/test';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'shell';

  constructor() {
    log("shell created....");
  }

  // @ViewChild('vc', { read: ViewContainerRef, static: true })
  // viewContainer: ViewContainerRef;

  // constructor(
  //   @Inject(Injector) private injector,
  //   @Inject(ComponentFactoryResolver) private cfr) { }

    // home(): void {
    //   this.viewContainer.clear();
    // }

    load() {
      // const comp = await import('mfe1/Component').then(m => {
      //   return m.AppComponent;
      // });
      // const factory = this.cfr.resolveComponentFactory(comp);
      // this.viewContainer.createComponent(factory, null, this.injector);
    }
}

