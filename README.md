[toc]

# c3d_libs

    基于CocosCreator的一套框架

适配版本: 3.0(2.x版本可能简单修改后进行适配)
    
目前已实现:

1. 弹框管理

暂未实现:

1. 弹框的资源销毁

# API

## 弹框管理

### 初始化

在使用前，需要进行初始胡

```
PopupManager.instance.init():void;
```

### 预加载

对于动态加载的，可能直接使用会造成一定耗时，可以进行预加载

```
PopupManager.instance.preLoad(option: { name?: string, prefab?: Prefab, url?: string }):void;
```

### 显示

```
PopupManager.instance.show(option: { name?: string, prefab?: Prefab, path?: string, priority?: number, params?: any, keep?: boolean }):void;
```

### 隐藏

```
PopupManager.instance.hide(name:string):void;
```

### 隐藏所有

```
PopupManager.instance.hideAll():void;
```

### 移除

```
PopupManager.instance.remove(name:string):void;
```

### 移除所有

```
PopupManager.instance.removeAll(name:string):void;
```

### 获取当前弹框的名字

```
PopupManager.instance.getCurrentName(): string | null;
```

### 根据弹框名获取弹框

```
PopupManager.instance.getPopup(name: string): Node | null;
```



