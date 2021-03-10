
import { _decorator, director, Node, Prefab, ScrollView, instantiate, Label, Component } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('TestScene')
export class TestScene extends Component {

    @property({
        type: Prefab
    })
    item: Prefab = null!;


    @property({
        type: ScrollView
    })
    sv: ScrollView = null!;

    private list: { name: string, call: Function }[] = [
        {
            name: '弹框测试', call: this.onPopup
        },
        {
            name: '适配测试', call: this.onAdapter
        }
    ];

    onLoad() {
        for (let i = 0; i < this.list.length; i++) {
            let node = instantiate(this.item);
            node.getChildByName('Label')!.getComponent(Label)!.string = this.list[i].name;
            node.on(Node.EventType.TOUCH_END, this.list[i].call, this);
            node.parent = this.sv.content;
        }

    }

    onPopup() {
        director.loadScene('Popup');
    }

    onAdapter() {
        director.loadScene('Adapter');
    }
}
