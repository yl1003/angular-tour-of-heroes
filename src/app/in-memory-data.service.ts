import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataDbService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id:11, name: '孙悟空' },
            { id:12, name: '猪八戒' },
            { id:13, name: '红孩儿' },
            { id:14, name: '牛魔王' },
            { id:15, name: '太上老君' },
            { id:16, name: '如来佛主' },
            { id:17, name: '二郎神' },
            { id:18, name: '观音菩萨' },
            { id:19, name: '唐僧' },
            { id:20, name: '白龙马1' }
        ];
        return {heroes};
    }
}