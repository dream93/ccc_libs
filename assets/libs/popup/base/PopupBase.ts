
import { PopupManager } from '../manager/PopupManager';

export enum AnimType {
    SCALE, FADE
}

const { ccclass, property } = cc._decorator;

@ccclass
export class PopupBase extends cc.Component {

    @property(cc.Boolean)
    blockInput: boolean = true;

    @property(cc.Boolean)
    anim: boolean = true;

    @property({
        type: cc.Enum(AnimType),
        visible() {
            return (this as any).anim;
        }
    })
    animType: AnimType = AnimType.SCALE;

    private _popupName: string = "";
    get popupName() {
        return this._popupName;
    }

    onLoad() {
        if (this.blockInput) {
            this.node.addComponent(cc.BlockInputEvents);
        }
    }

    _init(name: string, params: any) {
        this._popupName = name;
        this.init(params);
    }

    /**
     * 第一次创建将会在onLoad之前创建，后续将会在onEnable之前执行
     * @param data 传入数据
     */
    init(data: any) { };

    _show() {
        this.node.active = true;
        if (this.anim) {
            this.node.scale = 0;
            cc.tween(this.node).to(0.2, { scale: 1.2 }).to(0.05, { scale: 1 }).call(() => {
                this.onShow();
            }).start();
        } else {
            this.onShow();
        }
    }

    /**
     * 动画播放完后显示，onEnable之后执行
     */
    onShow() { }

    _hide() {
        this.onHide();
        this.node.active = false;
    }

    onHide() { }

    _remove() {
        this.node.destroy();
    }

    hideUI() {
        PopupManager.instance.hide(this.popupName);
    }

    removeUI() {
        PopupManager.instance.remove(this.popupName);
    }
}
