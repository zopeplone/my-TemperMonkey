# MyTemperMonkey
在腾讯mini考核环节中制作的油猴插件demo
## 原理
将用户书写的代码保存到chrome storage中，然后在content层每次初始化时，使用eval执行用户书写的代码
### eval在浏览器插件中被禁用
通过eval5库（一个只支持es5语法的JavaScript解释器）与babel，达到在浏览器插件中执行字符串代码的功能
## 预览图如下


https://github.com/zopeplone/my-TemperMonkey/assets/115687693/7696f846-7360-4af5-a847-9f2eb5b98b22


![image](https://github.com/zopeplone/my-TemperMonkey/assets/115687693/e197bef9-1658-47b4-bdb3-d3a9498610c9)
![image](https://github.com/zopeplone/my-TemperMonkey/assets/115687693/935b88f8-3f24-4fbb-86e9-5ed3b8d16860)
