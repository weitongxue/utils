### 本地启动
```npm run dev ```

### 构建
```npm run build ```

### 更新工具库
 目前需要手动更改版本号，然后
```npm run publish```

### 注意项
 - 使用（typedoc-plugin-external-module-name）插件，typedoc 的版本不能高于0.20.0;
 - 使用（typedoc-plugin-external-module-name）插件时，typedoc.json 里设置的entryPoints会报错，没法按照官网那样子设置（原因暂不详）