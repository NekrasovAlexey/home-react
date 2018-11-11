import {Events} from "app/Modules/Events/Events";
import * as React from 'react';
import {cn} from '@bem-react/classname';

require('./Layout.css');

const cnMain = cn('Main');

export const Layout: React.SFC = () => (
    <div>
        <main className={cnMain()}>
            <header className={cnMain('Title')}>
                Лента событий
            </header>
            <Events/>
        </main>
    </div>
);
