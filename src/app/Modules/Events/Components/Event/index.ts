import { compose } from '@bem-react/core';
import {EventDataTypeGraph} from "app/Modules/Events/Components/Event/_type/Event_type_graph";
import { Event as Base } from './Event';

export const Event = compose(
    EventDataTypeGraph
)(Base);
