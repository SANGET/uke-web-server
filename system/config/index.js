/**
 * 端口说明
 * 28101 静态资源端口
 * 28102 管理后台资源端口
 * 6650  前端静态资源管理端口
 * 8890  webhook 端口
 */

const config = {
  mainServerPort: 28101,
  adminServerPort: 28102,
  FEServerPort: 6650,
  webhookPort: 8890,
  systemDir: 'system',
  runtimeDir: 'runtime',
  adminDirName: '_admin',
  publicStaticPaths: ['public', 'pb'],
}

module.exports = config;