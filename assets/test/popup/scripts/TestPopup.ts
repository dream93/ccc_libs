
import { EventManager } from '../../../libs/event/manager/EventManager';
import { PopupBase } from '../../../libs/popup/base/PopupBase';
import { ShowPopupEvent } from './PopupScene';

const { ccclass, property } = cc._decorator;

@ccclass
export class TestPopup extends PopupBase {

    @property({
        type: cc.Label
    })
    nameLabel: cc.Label = null!;

    init() {
        this.nameLabel.string = this.popupName;
    }

    onPopup2() {
        EventManager.instance.emit(ShowPopupEvent.POPUP2);
    }
}
