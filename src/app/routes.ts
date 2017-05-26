import { HomeComponent } from './home/home.component';
import { DetailUserComponent } from './users/details/detailUser.component';
import { SearchUserComponent } from './search/users/searchUsers.component';
import { SearchRepositoriesComponent } from './search/repositories/searchRepositories.component';
import { OrganizationListComponent } from './organizations/organizationsList/organizationsList.component';
import { OrganizationDetailComponent } from './organizations/organizationsDetail/organizationsDetail.component';
import { RepositoryListComponent } from './repositories/repositoryList/repositoryList.component';
import { RepositoryDetailComponent } from './repositories/repositoryDetail/repositoryDetail.component';
import { EventPublicComponent } from './events/public/eventPublic.component';
import { UsersComponent } from './users/users.component';
import { EmojisComponent } from './emojis/emojis.component';
import { ErrorComponent } from './error/error.component';

export const APP_ROUTES = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    pathMatch: 'full'
  },
  {
    path: 'user/details/:id',
    component: DetailUserComponent,
    pathMatch: 'full'
  },
  {
    path: 'search/users/:user',
    component: SearchUserComponent,
    pathMatch: 'full'
  },
  {
    path: 'search/repositories/:repo',
    component: SearchRepositoriesComponent,
    pathMatch: 'full'
  },
  {
    path: 'organizations',
    component: OrganizationListComponent,
    pathMatch: 'full'
  },
  {
    path: 'organizations/details/:org',
    component: OrganizationDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'repositories',
    component: RepositoryListComponent,
    pathMatch: 'full'
  },
  {
    path: 'repositories/details/:login/:repo',
    component: RepositoryDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventPublicComponent,
    pathMatch: 'full'
  },
  {
    path: 'emojis',
    component: EmojisComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'error404',
    component: ErrorComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/error404'
  }
];
