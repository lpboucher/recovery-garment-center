import React, { Fragment } from 'react';

import Jumbo from './Jumbotron';
import InfoGrid from './InfoGrid';
import BodyNavigation from './BodyNavigation';
import BodyPartItem from './BodyPartItem';

const MainPage = ({data, locale}) => {
    const { info, bodyParts, jumbo } = data;
    return (
        <Fragment>
            <Jumbo data={jumbo}/>
            <InfoGrid data={info}/>
            <BodyNavigation loc={locale} data={bodyParts}/>
            { bodyParts.edges.map(item => 
                <BodyPartItem 
                    key={item.node.id}
                    order={data.orderForms}
                    loc={locale}
                    {...item.node}/>
            )}
        </Fragment>
    );
};

export default MainPage;