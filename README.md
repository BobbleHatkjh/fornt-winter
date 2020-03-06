# fornt-winter
19-20寒假实训（酒店预定app）前端部分

clone后需要运行的环境: node 环境

运行命令：
  运行： $～ npm run serve
  打包： $～ npm run build
  push到git仓库： $~ git push origin fest_1st
  pull从git仓库： $~ git pull origin fest_1st
  
提交：
  如果commit被husky或者pre-commit拦下来了：
  rm -fr .git/hooks/            
     
忘记添加至 .gitignore 后的修正：

  $～ git rm -r --cached .
  $～ git add .
  $～ git commit -m 'fix- 修正gitignore
  $～ git push xxxxxx 
