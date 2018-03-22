import { BaseEntity } from './../../shared';

export class Device implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public status?: any,
    ) {
    }
}
