
import { _decorator, Component, Node, Label, Layers } from 'cc';
import { EventManager } from '../../../libs/event/manager/EventManager';
import { PopupBase } from '../../../libs/popup/base/PopupBase';
import { ShowPopupEvent } from './PopupScene';
const { ccclass, property } = _decorator;

@ccclass('TestPopup')
export class TestPopup extends PopupBase {

    @property({
        type: Label
    })
    nameLabel: Label = null!;

    init() {
        this.nameLabel.string = this.popupName;
    }

    onPopup2() {
        EventManager.instance.emit(ShowPopupEvent.POPUP2);
    }
}
