@echo off
title Game Portfolio Local Preview Server
echo ========================================================
echo   Launching Game Portfolio Website Preview Server
echo ========================================================
echo.
echo Starting local web server on http://localhost:8000 ...
echo Press Ctrl+C in this window anytime to stop the server.
echo.

start http://localhost:8000

py -m http.server 8000 || python -m http.server 8000

pause
