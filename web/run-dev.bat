@echo off
set "NODE_PATH=C:\Program Files\nodejs"
if exist "%NODE_PATH%" set "PATH=%PATH%;%NODE_PATH%"
pushd "%~dp0"
call npm.cmd run dev
popd
