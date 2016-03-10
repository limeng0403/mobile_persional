# mobile_personal

网站的原js/css文件在src文件夹下，请修改此处的文件，之后用nodejs+grunt工具生成发布的压缩文件

为减少网站请求次数，需要合并自生成的css文件及js文件，为减少文件尺寸，对合并后的文件进行了压缩

图片和网页文件没有进行压缩，如果有需求也可以进行压缩，进一步减少网页请求及文件尺寸。

- 安装好nodejs以及npm后，在网站所在目录下执行一次npm install

- 安装好grunt-cli后，在网站所在目录下执行一次grunt

- 如果提示Done,without errors.说明文件已经合并压缩成功。