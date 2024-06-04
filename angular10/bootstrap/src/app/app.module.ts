import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagina/home/home.component';
import { GridComponent } from './pagina/grid/grid.component';
import { ContainerComponent } from './pagina/container/container.component';
import { ColumnComponent } from './pagina/column/column.component';
import { GutterComponent } from './pagina/gutter/gutter.component';
import { PositionComponent } from './pagina/position/position.component';
import { ShadowComponent } from './pagina/shadow/shadow.component';
import { MarginComponent } from './pagina/margin/margin.component';
import { PaddingComponent } from './pagina/padding/padding.component';
import { SizingComponent } from './pagina/sizing/sizing.component';
import { DisplayComponent } from './pagina/display/display.component';
import { TypographyComponent } from './pagina/typography/typography.component';
import { VerticalRuleComponent } from './pagina/vertical-rule/vertical-rule.component';
import { StackComponent } from './pagina/stack/stack.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridComponent,
    ContainerComponent,
    ColumnComponent,
    GutterComponent,
    PositionComponent,
    ShadowComponent,
    MarginComponent,
    PaddingComponent,
    SizingComponent,
    DisplayComponent,
    TypographyComponent,
    VerticalRuleComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
