
export class EventManager {
    private static _instance: cc.EventTarget;
    public static get instance() {
        if (null == this._instance) {
            this._instance = new cc.EventTarget();
        }
        return this._instance;
    }

}
