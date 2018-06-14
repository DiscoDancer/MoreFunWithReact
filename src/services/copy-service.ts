export default class CopyService {
    static deepcopy<T>(o: T): T {
        return JSON.parse(JSON.stringify(o));
    }
}