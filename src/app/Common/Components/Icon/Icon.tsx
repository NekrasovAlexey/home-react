import * as React from 'react';
import {cn} from '@bem-react/classname';

require('./Icon.css');

const cnIcon = cn('Icon');

interface IProps {
    className?: string;
    type: string;
}

export const Icon: React.SFC<IProps> = ({className, type}: IProps) => (
    <div className={cnIcon({type}, [className])}/>
);
