//Higher Order Component(HOC) - A component(HOC) that renders another component
//advantages of using HOC are -> reuse code,render hijacking, prop manupilation, abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info please do not share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>{props.isAuthenticated ? "This is private info please do not share" :"Please login to see the details" }</p>
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    )

}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is info details" />, document.getElementById('App'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="This is info details" />, document.getElementById('App'));
