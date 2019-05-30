import React, { Fragment } from 'react';

import Jumbo from './Jumbotron';
import InfoGrid from './InfoGrid';
import BodyNavigation from './BodyNavigation';
import BodyPartItem from './BodyPartItem';

const MainPage = ({data, currentLocation}) => {
    const { info, bodyParts, jumbo } = data;
    return (
        <Fragment>
            <Jumbo id="top-navbar" data={jumbo}/>
            <InfoGrid data={info}/>
            <BodyNavigation loc={currentLocation} data={bodyParts}/>
            { bodyParts.edges.map(item => 
                <BodyPartItem 
                    key={item.node.id}
                    {...item.node}/>
            )}
        </Fragment>
    );
};

export default MainPage;