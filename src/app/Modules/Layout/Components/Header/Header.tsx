import * as React from 'react';
import {cn} from '@bem-react/classname';

const cnHeader = cn('Header');

export const Header: React.SFC = () => (
    <header className={cnHeader()}>
        <div className={cnHeader('Logo')}>
            <img src="assets/logo.svg"/>
        </div>
        <div className="paranja paranja_hidden">

        </div>
        <button className="header__mobile-menu">
            <span className="icon icon_list">

            </span>
        </button>
        <div className="header__menu menu_hidden">
        </div>
    </header>
);
