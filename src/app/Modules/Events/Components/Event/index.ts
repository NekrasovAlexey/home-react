import { compose } from '@bem-react/core';
import {EventDataTypeGraph} from "app/Modules/Events/Components/Event/_type/Event_type_graph/Event_type_graph";
import {EventDataTypeThermal} from "app/Modules/Events/Components/Event/_type/Event_type_thermal/Event_type_thermal";
import { Event as Base } from './Event';

export const Event = compose(
    EventDataTypeGraph,
    EventDataTypeThermal
)(Base);
