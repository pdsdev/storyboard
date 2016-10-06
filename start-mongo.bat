@echo off
:: Startup the MongoDB server using the mongod.config file in the same directory as this script.

:: Name of our project
set PROJECT=storyboard

:: Where we are running from.
set SCRIPT_DIR=%~dps0

:: Created the needed directories for storing the database if they don't exist
IF NOT EXIST \data\%PROJECT%\log mkdir \data\%PROJECT%\log
IF NOT EXIST \data\%PROJECT%\db mkdir \data\%PROJECT%\db

:: Create config file to match our pattern
echo systemLog:                                  >  "%SCRIPT_DIR%mongod.config"
echo     destination: file                       >> "%SCRIPT_DIR%mongod.config"
echo     path: c:\data\%PROJECT%\log\mongod.log  >> "%SCRIPT_DIR%mongod.config"
echo storage:                                    >> "%SCRIPT_DIR%mongod.config"
echo     dbPath: c:\data\%PROJECT%\db            >> "%SCRIPT_DIR%mongod.config"
	
"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --config "%SCRIPT_DIR%mongod.config"