import {EEventDataType} from "app/Modules/Events/Models";
import * as React from 'react';
import {withBemMod, ModBody} from '@bem-react/core';
import {cn} from '@bem-react/classname';

const cnEvent = cn('Event');
const cnThermal = cn('Climate');

const ThermalEvent: ModBody<any> = (Base, props) => (
    <Base {...props}>
        <div className={cnEvent('Climate')}>
            <div className={cnThermal('Temperature')}>
                Температура
                <span className={cnThermal('Value')}>
                    {props.data.temperature}
                </span>
            </div>
            <div className={cnThermal('Humidity')}>
                Влажность
                <span className={cnThermal('Value')}>
                    {props.data.humidity}
                </span>
            </div>
        </div>
    </Base>
);

export const EventDataTypeThermal = withBemMod(cnEvent(), {dataType: EEventDataType.THERMAL}, ThermalEvent);
