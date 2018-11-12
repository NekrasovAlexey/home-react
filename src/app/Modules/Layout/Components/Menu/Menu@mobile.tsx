import {Icon} from "app/Common/Components/Icon/Icon";
import * as React from 'react';
import { Registry, withRegistry } from '@bem-react/di';
import { cn } from '@bem-react/classname';
import { Menu as MenuBase } from './Menu';

const cnMenu = cn('Menu');
const cnParanja = cn('Paranja');
const cnHeader = cn('Header');

const registry = new Registry({id: cnMenu()});

interface IState {
    isMenuOpen: boolean;
}

class MobileMenu extends React.Component<{}, IState> {
    state: IState = {
        isMenuOpen: false
    };

    handleToggleMenu = () => this.setState({
        isMenuOpen: !this.state.isMenuOpen
    });

    render () {
        const {isMenuOpen} = this.state;

        return (
            <div>
                {
                    isMenuOpen &&
                        <div
                            className={cnParanja()}
                            onClick={this.handleToggleMenu}
                        />
                }
                <button
                    className={cnHeader('MobileMenu')}
                    onClick={this.handleToggleMenu}
                >
                    <Icon type="list"/>
                </button>
                {
                    isMenuOpen &&
                        <nav className={cnMenu()}>
                            <ul className={cnMenu('List')}>
                                <li className={cnMenu('Item')}>
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
                }
            </div>
        )
    }
}

registry.set('Inner', MobileMenu);

export const Menu = withRegistry(registry)(MenuBase);
