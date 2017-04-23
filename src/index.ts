import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RbListService } from './rb-list.service';

export * from './rb-list.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    
  ],
  exports: [
    
  ]
})
export class RbListServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RbListServiceModule,
      providers: [RbListService]
    };
  }
}
