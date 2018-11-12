import * as React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

require('./Menu.css');

const cnHeader = cn('Header');
const cnMenu = cn('Menu');

export const Menu: React.SFC = () => (
    <RegistryConsumer>
        {registries => {
            const registry = registries[cnMenu()];

            const Menu = registry.get<any>('Inner');

            return (
                <header className={cnHeader()}>
                    <div className={cnHeader('Logo')}>
                        <img src="app/Modules/Layout/Components/Menu/assets/logo.svg"/>
                    </div>
                    <Menu/>
                </header>
            )
        }}
    </RegistryConsumer>
);