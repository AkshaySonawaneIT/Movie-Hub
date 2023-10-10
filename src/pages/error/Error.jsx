import React from 'react';
import "./error.scss";
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';


function Error() {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </ContentWrapper>
        </div>
    )
}

export default Error
