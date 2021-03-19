
const { ccclass, property } = cc._decorator;

@ccclass
export class TestScene extends cc.Component {

    @property({
        type: cc.Prefab
    })
    item: cc.Prefab = null!;


    @property({
        type: cc.ScrollView
    })
    sv: cc.ScrollView = null!;

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
            let node = cc.instantiate(this.item);
            node.getChildByName('Label')!.getComponent(cc.Label)!.string = this.list[i].name;
            node.on(cc.Node.EventType.TOUCH_END, this.list[i].call, this);
            node.parent = this.sv.content;
        }

    }

    onPopup() {
        cc.director.loadScene('Popup');
    }

    onAdapter() {
        cc.director.loadScene('Adapter');
    }
}
