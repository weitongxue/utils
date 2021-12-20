### 本地启动
```npm run dev ```

### 构建
```npm run build ```

### 更新工具库
```npm run publish```

### 自动生成版本号并选择更新到npm  
  借助release-it这个工具库，可以实现自动生成版本号并且发布到npm（执行publish）  
  
  . 安装
    npm install release-it
    
  . 配置见 [release-it](https://github.com/release-it/release-it)

### 注意项
 - 使用（typedoc-plugin-external-module-name）插件，typedoc 的版本不能高于0.20.0;
 - 使用（typedoc-plugin-external-module-name）插件时，typedoc.json 里设置的entryPoints会报错，没法按照官网那样子设置（原因暂不详）