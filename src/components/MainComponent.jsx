import React from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import OurMissionPage from './OurMissionComponent';
import FeaturesPage from './FeaturesComponents';
import UsersFeedbackPage from './UsersFeedbackComponent';
import DownloadsPage from './DownloadsComponent';

const Main = () => {

    return (
        <div>
            <Header />

            <div>
                <TransitionGroup>
                    <CSSTransition classNames="page" timeout={300}>
                    <Switch>
                        <Route path='/home' component={ HomePage } />
                        <Route exact path='/ourmission' component={ OurMissionPage } />
                        <Route exact path='/features' component={ FeaturesPage } />
                        <Route exact path='/usersfeedback' component={ UsersFeedbackPage } />
                        <Route exact path='/downloads' component={ DownloadsPage } />
                        <Redirect to="/home" />
                    </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <Footer />
        </div>
    );
}

export default Main;
    