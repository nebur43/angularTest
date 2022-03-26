import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'home',  component:HomeComponent},
  {path:'container',  component:ContainerComponent},
  {path:'grid',  component:GridComponent},
  {path:'column',  component:ColumnComponent},
  {path:'gutter',  component:GutterComponent},
  {path:'position',  component:PositionComponent},
  {path:'shadow',  component:ShadowComponent},
  {path:'margin',  component:MarginComponent},
  {path:'padding',  component:PaddingComponent},
  {path:'sizing',  component:SizingComponent},
  {path:'display',  component:DisplayComponent},
  {path:'stack',  component:StackComponent},
  {path:'typography',  component:TypographyComponent},
  {path:'vertical-rule',  component:VerticalRuleComponent},
  {path:'**',  redirectTo:'home'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
