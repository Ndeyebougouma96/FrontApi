import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscrptionComponent } from './inscrption/inscrption.component';
import { ModificationComponent } from './modification/modification.component';
import { PageArchiveComponent } from './page-archive/page-archive.component';
import { ProfilComponent } from './profil/profil.component';
import { UtilisateurComponent } from './users/utilisateur/utilisateur.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: "pageArchive" , component: PageArchiveComponent},
{path: "admin", component: UtilisateurComponent},
{path: "profil", component: ProfilComponent},

{path:"inscription", component: InscrptionComponent},

{path:"login", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
