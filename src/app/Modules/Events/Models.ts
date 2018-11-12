export enum EEventType {
    INFO = 'info',
    CRITICAL = 'critical'
}

export enum EEventSize {
    S = 's',
    M = 'm',
    L = 'l'
}

export enum EEventDataType {
    GRAPH = 'graph',
    THERMAL = 'termal',
    MUSIC = 'music',
    BUTTONS = 'buttons',
    IMAGE = 'image'
}

export interface IEvent {
    type: EEventType;
    title: string;
    source: string;
    time: string;
    description: string | null;
    icon: string;
    size: EEventSize;
    data?: any;
}