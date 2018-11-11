import {Icon} from "app/Common/Components/Icon/Icon";
import {IEvent} from "app/Modules/Events/Models";
import * as React from 'react';
import {cn} from '@bem-react/classname';

require('./Event.css');

const cnEvent = cn('Event');

export const Event: React.SFC<IEvent> = (props: IEvent) => (
    <div className={cnEvent({type: props.type, size: props.size})}>
        <div className={cnEvent('Header')}>
            <Icon className={cnEvent('Icon')} type={props.icon}/>
            <div className={cnEvent('Title')}>
                {props.title}
            </div>
            <div className={cnEvent('Source')}>
                {props.source}
            </div>
            <div className={cnEvent('Time')}>
                {props.time}
            </div>
        </div>
        {
            (props.description || props.data) &&
            <div className={cnEvent('Info')}>
                <div className={cnEvent('Description')}>
                    {props.description}
                </div>
                <div className={cnEvent('Data')}>

                </div>
            </div>
        }
    </div>
);
