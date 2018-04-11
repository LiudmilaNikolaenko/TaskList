import {Record, OrderedMap} from 'immutable';

export function arrToMap(arr, DataRecord = Record) {
    return arr.reduce((acc, item) =>
        acc.set(item.id, new DataRecord(item))
    , new OrderedMap({}))
};

export function mapToArr(obj) {
    return obj.valueSeq().toArray()
};

export const timeToString = duration => {
    let t = duration;
    let dd = Math.floor(t / 86400000);
    t = t % 86400000;
    let hh = Math.floor(t / 3600000); 
    t = t % 3600000; 
    let mm = Math.floor(t / 60000);
    t = t % 60000;
    let ss = Math.floor(t / 1000);
    let str = dd ? dd + ' day(s) ' : '';
    return  str + ('0' + hh).slice(-2) + ':' + ('0' + mm).slice(-2) + ':' + ('0' + ss).slice(-2);
};