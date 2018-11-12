import * as React from 'react';
import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { Menu as MenuBase } from './Menu';

const cnMenu = cn('Menu');

const registry = new Registry({id: cnMenu()});

registry.set('Inner', () => (
    <nav className={cnMenu()}>
        <ul className={cnMenu('List')}>
            <li className={cnMenu('Item', {active: true})}>
                <a className={cnMenu('Link')} href="#">Сводка</a>
            </li>
            <li className={cnMenu('Item')}>
                <a className={cnMenu('Link')} href="#">Устройства</a>
            </li>
            <li className={cnMenu('Item')}>
                <a className={cnMenu('Link')} href="#">Сценарии</a>
            </li>
        </ul>
    </nav>
));

export const Menu = withRegistry(registry)(MenuBase);
