import { BrowserModule, Title }         from '@angular/platform-browser'
import { NgModule }                     from '@angular/core'
import { FormsModule }                  from '@angular/forms'
import { HttpModule }                   from '@angular/http'
import { InfiniteScrollModule }         from 'ngx-infinite-scroll'
import { NgxPaginationModule }          from 'ngx-pagination'
import { TruncateModule }               from 'ng2-truncate'
import { OwlModule }                    from 'ng2-owl-carousel'
import { Parallax }                     from './directives/parallax.directive'
import { MaterializeModule }            from 'ng2-materialize'
import {MomentModule}                   from 'angular2-moment'

import { AppComponent }                 from './app.component'
import { APIService }                   from './services/APIService'

import { ValuesPipe }                   from './pipes/ValuesPipe'

import { HomeComponent }                from './home/home.component'
import { ErrorComponent }               from './error/error.component'
import { DetailUserComponent }          from './users/details/detailUser.component'
import { SearchUserComponent }          from './search/users/searchUsers.component'
import { SearchRepositoriesComponent }  from './search/repositories/searchRepositories.component'
import { OrganizationListComponent }    from './organizations/organizationsList/organizationsList.component'
import { OrganizationDetailComponent }  from './organizations/organizationsDetail/organizationsDetail.component'
import { RepositoryListComponent }      from './repositories/repositoryList/repositoryList.component'
import { RepositoryDetailComponent }    from './repositories/repositoryDetail/repositoryDetail.component'
import { EventPublicComponent }         from './events/public/eventPublic.component'
import { UsersComponent }               from './users/users.component'
import { EmojisComponent }              from './emojis/emojis.component'

import { RouterModule }                 from '@angular/router'
import {APP_ROUTES}                     from './routes'

@NgModule({
  declarations: [
    AppComponent,
    ValuesPipe,
    HomeComponent,
    ErrorComponent,
    DetailUserComponent,
    SearchUserComponent,
    SearchRepositoriesComponent,
    OrganizationListComponent,
    OrganizationDetailComponent,
    RepositoryListComponent,
    RepositoryDetailComponent,
    EventPublicComponent,
    UsersComponent,
    EmojisComponent,
    Parallax
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    InfiniteScrollModule,
    NgxPaginationModule,
    OwlModule,
    TruncateModule,
    MaterializeModule.forRoot(),
    MomentModule
  ],
  providers: [APIService, Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
