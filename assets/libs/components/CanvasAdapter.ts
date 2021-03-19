
import { ResolutionPolicy } from 'cc';
import { _decorator, Component, view, Enum } from 'cc';
const { ccclass, property } = _decorator;


export enum ResolutionType {
    EXACT_FIT = ResolutionPolicy.EXACT_FIT,
    NO_BORDER = ResolutionPolicy.NO_BORDER,
    SHOW_ALL = ResolutionPolicy.SHOW_ALL,
    FIXED_HEIGHT = ResolutionPolicy.FIXED_HEIGHT,
    FIXED_WIDTH = ResolutionPolicy.FIXED_WIDTH,
    CUSTOM = 9
}

@ccclass('CanvasAdapter')
export class CanvasAdapter extends Component {

    @property({
        type: Enum(ResolutionType)
    })
    private _resolutionType: ResolutionType = ResolutionType.CUSTOM;

    @property({
        type: Enum(ResolutionType)
    })
    set resolutionType(type: ResolutionType) {
        this._resolutionType = type;
        this.setAdapter();
    }

    get resolutionType() {
        return this._resolutionType;
    }

    onLoad() {
        this.setAdapter();
    }

    setAdapter() {

        if (ResolutionType.EXACT_FIT == this.resolutionType) {
            console.error('该方式已不被支持');
            return;
        }

        let designSize = view.getDesignResolutionSize();
        if (ResolutionType.CUSTOM != this.resolutionType) { // 其它模式直接使用Cocos的API
            view.setDesignResolutionSize(designSize.width, designSize.height, this.resolutionType);
        } else {
            let visibleSize = view.getVisibleSize();
            let designSize = view.getDesignResolutionSize();
            if (visibleSize.height / visibleSize.width > designSize.height / designSize.width) { // 长屏
                view.setDesignResolutionSize(designSize.width, designSize.height, ResolutionPolicy.FIXED_WIDTH);
            } else { // 宽屏
                view.setDesignResolutionSize(designSize.width, designSize.height, ResolutionPolicy.FIXED_HEIGHT);
            }
        }
    }
}
