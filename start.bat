@echo off
title Mohamed Sabiq Portfolio - Local Server
echo ======================================================
echo Starting Mohamed Sabiq Portfolio Preview Server...
echo ======================================================

:: Launch browser in background after 1 second
start http://localhost:3000

:: Start Node server
node serve.js

pause
