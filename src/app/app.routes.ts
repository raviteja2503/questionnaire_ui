import { Routes, RouterModule } from "@angular/router";
import { QuestionsComponent } from './questions/questions.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { HeaderComponent } from './header/header.component';

const APP_ROUTES: Routes = [
    {
        path: "",
        redirectTo: "/questions",
        pathMatch: "full"
    },
    {
        path: "header",
        component: HeaderComponent
    },
    {
        path: "questions",
        component: QuestionsComponent
    }, {
        path: 'add-question',
        component: AddQuestionComponent
    },

];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });