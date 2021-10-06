import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { TableModule } from 'primeng/table';
import {  ToastModule } from 'primeng/Toast';
import { MessageService, SharedModule } from 'primeng/api';
import {AccordionModule} from 'primeng/Accordion';
import {AutoCompleteModule} from 'primeng/AutoComplete';
import {BreadcrumbModule} from 'primeng/Breadcrumb';
//import {CalendarModule} from 'primeng/primeng';
import {CarouselModule} from 'primeng/Carousel';
//import {ChartModule} from 'primeng/Chart';
import {CheckboxModule} from 'primeng/Checkbox';
import {ChipsModule} from 'primeng/Chips';
import {CodeHighlighterModule} from 'primeng/CodeHighlighter';
import {ConfirmDialogModule} from 'primeng/ConfirmDialog';
//import {SharedModule} from 'primeng/Shared';
import {ContextMenuModule} from 'primeng/ContextMenu';
//import {DataGridModule} from 'primeng/DataGrid';
//import {DataListModule} from 'primeng/DataList';
//import {DataScrollerModule} from 'primeng/DataScrolle';
//import {DataTableModule} from 'primeng/DataTable';
import {DialogModule} from 'primeng/Dialog';
import {DragDropModule} from 'primeng/DragDrop';
//import {DropdownModule} from 'primeng/Dropdown';
//import {EditorModule} from 'primeng/Editor';
import {FieldsetModule} from 'primeng/Fieldset';
import {FileUploadModule} from 'primeng/FileUpload';
import {GalleriaModule} from 'primeng/Galleria';
import {GMapModule} from 'primeng/GMap';
//import {GrowlModule} from 'primeng/Growl';
import {InputMaskModule} from 'primeng/InputMask';
import {InputSwitchModule} from 'primeng/InputSwitch';
//import {InputTextModule} from 'primeng/InputText';
import {InputTextareaModule} from 'primeng/InputTextarea';
import {LightboxModule} from 'primeng/Lightbox';
import {ListboxModule} from 'primeng/Listbox';
import {MegaMenuModule} from 'primeng/MegaMenu';
//import {MenuModule} from 'primeng/Menu';
import {MenubarModule} from 'primeng/Menubar';
//import {MessagesModule} from 'primeng/Messages';
import {MultiSelectModule} from 'primeng/MultiSelect';
import {OrderListModule} from 'primeng/OrderList';
import {OverlayPanelModule} from 'primeng/OverlayPanel';
//import {PaginatorModule} from 'primeng/Paginator';
import {PanelModule} from 'primeng/Panel';
import {PanelMenuModule} from 'primeng/PanelMenu';
import {PasswordModule} from 'primeng/Password';
import {PickListModule} from 'primeng/PickList';
//import {ProgressBarModule} from 'primeng/ProgressBar';
import {RadioButtonModule} from 'primeng/RadioButton';
import {RatingModule} from 'primeng/Rating';
//import {ScheduleModule} from 'primeng/Schedule';
//import {SelectButtonModule} from 'primeng/SelectButton';
import {SlideMenuModule} from 'primeng/SlideMenu';
import {SliderModule} from 'primeng/Slider';
import {SpinnerModule} from 'primeng/Spinner';
import {SplitButtonModule} from 'primeng/SplitButton';
import {StepsModule} from 'primeng/Steps';
import {TabMenuModule} from 'primeng/TabMenu';
import {TabViewModule} from 'primeng/TabView';
import {TerminalModule} from 'primeng/Terminal';
import {TieredMenuModule} from 'primeng/TieredMenu';
import {ToggleButtonModule} from 'primeng/ToggleButton';
import {ToolbarModule} from 'primeng/Toolbar';
//import {TooltipModule} from 'primeng/Tooltip';
import {TreeModule} from 'primeng/Tree';
import {TreeTableModule} from 'primeng/TreeTable';
//import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ProductsRoutingModule,
         TableModule,
         ToastModule,ButtonModule,
       


        // BrowserModule, 
         FormsModule,
        //  BrowserAnimationsModule,
      AccordionModule,
          AutoCompleteModule,
          BreadcrumbModule,
          ButtonModule,
          CalendarModule,
          CarouselModule,
         // ChartModule,
          CheckboxModule,
          ChipsModule,
          CodeHighlighterModule,
          ConfirmDialogModule,
          SharedModule,
          ContextMenuModule,
          TreeTableModule,
          DialogModule,
          DragDropModule,
          DropdownModule,
          //EditorModule,
          FieldsetModule,
          FileUploadModule,
          GalleriaModule,
          GMapModule,
          InputMaskModule,
          InputSwitchModule,
          InputTextModule,
          InputTextareaModule,
          LightboxModule,
          ListboxModule,
          MegaMenuModule,
          //MenuModule,
          MenubarModule,
          MessagesModule,
          MultiSelectModule,
          OrderListModule,
          OverlayPanelModule,
          PaginatorModule,
          PanelModule,
          PanelMenuModule,
          PasswordModule,
          PickListModule,
          ProgressBarModule,
          RadioButtonModule,
          RatingModule,
          SelectButtonModule,
          SlideMenuModule,
          SliderModule,
          SpinnerModule,
          SplitButtonModule,
          StepsModule,
          TabMenuModule,
          TabViewModule,
          TerminalModule,
          TieredMenuModule,
          ToggleButtonModule,
          ToolbarModule,
          TooltipModule,
          TreeModule,
          TreeTableModule 

    ],
    declarations: [
        LayoutComponent,
       ListComponent,
        AddEditComponent
    ],entryComponents: [
        AddEditComponent
      ], 
       providers:[MessageService],
})
export class ProductsModule { }