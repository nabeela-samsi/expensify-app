import React from 'react';
//we use browserRoute once to create a new router and we use route for every single page
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ExpenseDaashboardPage from '../components/ExpenseDaashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

//in route path will be url extension, component will be content.
//exact is false by default, due to this when we load different pages it shows the content of all the pages, to avoid this we need to set exat = true
//when user tries to excess non-existing file name or path then it should give proper information rather then loading the blank page.
//this is handled by passing a component without the path.
//when loading existing file path, it shows the proper content along with 404 to avoid this we need to use conditional operator
// const Switch = (
//     <BrowserRouter>
//         <div>
//             <Route path="/" component={ExpenseDaashboardPage} exact={true}/>
//             <Route path="/create" component={AddExpensePage} />
//             <Route path="/edit" component={EditExpensePage} />
//             <Route path="/help" component={HelpPage} />
//             <Route component={NotFoundPage} />
//         </div>
//     </BrowserRouter>
// );

//to avoid the issue we are using the Switch, it will go line by line to find the matching path, if it doesnt find any at that time it will go to the not found page content
//Adding the Header tag before the Switch tag will make the header available in all the pages
// const Switch = (
//     <BrowserRouter>
//         <div>
//             <Header />
//             <Switch>
//                 <Route path="/" component={ExpenseDaashboardPage} exact={true}/>
//                 <Route path="/create" component={AddExpensePage} />
//                 <Route path="/edit" component={EditExpensePage} />
//                 <Route path="/help" component={HelpPage} />
//                 <Route component={NotFoundPage} />
//             </Switch>
//         </div>
//     </BrowserRouter>
// );

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDaashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;