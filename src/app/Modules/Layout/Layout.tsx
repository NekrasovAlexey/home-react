import {detectBrowser} from "app/Common/Utils/BrowserUtils";
import {Events} from "app/Modules/Events/Events";
import {Menu as DesktopMenu} from "app/Modules/Layout/Components/Menu/Menu@desktop";
import {Menu as MobileMenu} from 'app/Modules/Layout/Components/Menu/Menu@mobile';

import * as React from 'react';
import {cn} from '@bem-react/classname';

require('./Layout.css');

const cnMain = cn('Main');

const isMobile = detectBrowser();

export const Layout: React.SFC = () => (
    <div>
        {isMobile ? <MobileMenu/> : <DesktopMenu/>}
        <main className={cnMain()}>
            <header className={cnMain('Title')}>
                Лента событий
            </header>
            <Events/>
        </main>
    </div>
);
