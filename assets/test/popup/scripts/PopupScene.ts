
import { EventManager } from '../../../libs/event/manager/EventManager';
import { PopupManager } from '../../../libs/popup/manager/PopupManager';

export enum ShowPopupEvent {
    POPUP2 = 'SHOW_POPUP_POPUP2'
}

const { ccclass, property } = cc._decorator;

@ccclass
export class PopupScene extends cc.Component {

    @property({
        type: cc.Prefab
    })
    popup1: cc.Prefab = null!;

    @property({
        type: cc.Prefab
    })
    popup2: cc.Prefab = null!;

    onLoad() {
        EventManager.instance.on(ShowPopupEvent.POPUP2, this.onShowPopup2, this);
    }

    onDestroy() {
        EventManager.instance.off(ShowPopupEvent.POPUP2, this.onShowPopup2, this);
    }

    onShowPopup1() {
        PopupManager.instance.show({ prefab: this.popup1 });
    }


    onShowTwoPopups() {
        PopupManager.instance.show({ name: 'popup1_1', prefab: this.popup1 });
        PopupManager.instance.show({ name: 'popup1_2', prefab: this.popup1 });
    }

    onShowPopup2() {
        PopupManager.instance.show({ prefab: this.popup2 });
    }

    onShowPopup1AndPopup2() {
        PopupManager.instance.show({ prefab: this.popup1 });
        PopupManager.instance.show({ prefab: this.popup2, keep: true });
    }

    onShowPopup3() {
        PopupManager.instance.show({ path: 'popup/Popup3', priority: 100 });
    }
}
