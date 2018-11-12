import {EEventDataType} from "app/Modules/Events/Models";
import * as React from 'react';
import {withBemMod, ModBody} from '@bem-react/core';
import {cn} from '@bem-react/classname';

const cnEvent = cn('Event');
const cnGraph = cn('Graph');

const GraphEvent: ModBody<any> = (Base, props) => (
    <Base {...props}>
        <div className={cnEvent('Graph', [cnGraph()])}>
            <img src="app/Modules/Events/Components/Event/_type/Event_type_graph/assets/graph.png" className={cnGraph('Image')}/>
        </div>
    </Base>
);

export const EventDataTypeGraph = withBemMod(cnEvent({rowSize: 'l'}), {dataType: EEventDataType.GRAPH}, GraphEvent);
