import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    //we will be using the client routing just to avoid full page refresh. That can be handled with javascript; anchor is also responsible for full page load. So we will replace anchor tag with Link tag.
    <div>
        {/* 404 - <a href='/'>Go home</a> */}
        404 - <Link to='/'>Go home</Link>
    </div>
);

export default NotFoundPage;