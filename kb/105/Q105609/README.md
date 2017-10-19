---
layout: page
title: "Q105609: MS-DOS 6.2 Step-Up (BBS) SETUP.BAT File"
permalink: /kb/105/Q105609/
---

## Q105609: MS-DOS 6.2 Step-Up (BBS) SETUP.BAT File

	Article: Q105609
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 6.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains a listing of the MS-DOS 6.2 Step-Up (downloadable version)
	SETUP.BAT file:
	
	@echo off
	if %1'==RESTART' goto restart
	if not exist 1MSDOS62.EXE goto missing
	
	REM ----- Do expansion of a split archive -----
	:multi
	md C:\stepup
	if not exist c:\stepup\nul goto dir_err
	
	REM Copy this batch file to the hard disk and transfer control to
	REM it so user can change floppies.
	
	echo Preparing MS-DOS 6.2 Setup...
	
	REM Retrieve this batch file's name from the command line
	REM
	if exist %0 goto copy as_is
	
	copy %0.bat c:\stepup\msstepup.bat
	c:\stepup\msstepup.bat RESTART
	
	:as_is
	copy %0 c:\stepup\msstepup.bat
	c:\stepup\msstepup.bat RESTART
	
	:restart
	echo Unpacking MS-DOS 6.2 Step-Up files...
	1msdos62.exe -n -o c:\stepup
	if errorlevel 1 goto exp_err
	
	:check2
	if exist 2MSDOS62.EXE goto onward2
	echo.
	echo Insert Disk 2 and then press ENTER.
	echo.
	pause>nul
	goto check2
	
	:onward2
	echo Continuing... unpacking MS-DOS 6.2 Step-Up files...
	2msdos62.exe -n -o c:\stepup
	if errorlevel 1 goto exp_err
	
	REM ------ Once the archives are unpacked, run the commands ------
	
	:unpacked
	c:
	cd \stepup
	
	REM ----- Begin Special Handling ------
	REM Check for one of 2 versions of MSDOS.SYS...
	
	if not exist msdos2.sy# goto domksys
	
	REM                  ITN       DUT
	csum C:\MSDOS.SYS 62c7 46e7 e4b3 b27f /H
	REM               814  935  894  938
	
	REM Unable to check? Try MAKESYS anyway.
	if errorlevel 255 goto domksys
	
	REM The common file is ready to go (itn.814 & dut.935)
	if errorlevel 1 if not errorlevel 2 goto domksys
	if errorlevel 3 if not errorlevel 4 goto domksys
	
	REM This one needs a alternate patch file (itn.935 & dut.938)
	if errorlevel 2 if not errorlevel 3 goto chg_ptch
	if errorlevel 4 if not errorlevel 5 goto chg_ptch
	
	REM Cannot recognize this file, so try MAKESYS anyway.
	goto domksys
	
	:chg_ptch
	REM Was there a failure on a previous run? y: ren alternate to final
	if not exist msdos.sy# goto ren2
	
	REM Has this been done before?
	if exist MSDOS.XX# goto domksys
	
	ren MSDOS.SY# MSDOS.XX#
	:ren2
	ren MSDOS2.SY# MSDOS.SY#
	
	REM ------ End Special Handling -------
	
	:domksys
	echo.
	echo.
	echo Starting the MAKESYS utility...
	makesys
	if errorlevel 1 goto mksys_err
	echo.
	echo.
	echo Starting MS-DOS 6.2 Setup...
	REM LOCALIZE HERE - MS-DOS Setup Program Filename
	setup.exe
	REM Setup will reboot, so batch processing at this point indicates a
	REM setup failure.
	goto setup_err
	
	REM ----- Error messages ------
	
	:missing
	echo.
	echo Cannot find the first MS-DOS 6.2 Step-Up archive file.
	echo.
	echo The archive file is named 1MSDOS62.EXE.
	echo
	echo To work properly, the SETUP.BAT file and the archive files
	echo must be located in the same directory. (Do not place these files
	echo the directory that contains your MS-DOS 6 files.)
	echo.
	goto exit
	
	:dir_err
	echo.
	echo Cannot create the temporary MS-DOS 6.2 Step-Up directory
	(C:\STEPUP).
	echo.
	echo Make sure that drive C does not already contain a file or
	directory
	echo named C:\STEPUP. Also, make sure that the root directory of drive
	C
	echo contains fewer than 512 files and that drive C is not write-
	protected.
	echo.
	goto exit
	
	REM ---- Extraction errors ----
	
	:exp_err
	echo.
	echo Could not extract the MS-DOS 6.2 Step-Up files.
	echo.
	if errorlevel 50 if not errorlevel 51 goto exp_spc
	if errorlevel 13 if not errorlevel 14 goto exp_bad
	if errorlevel 4 if not errorlevel 9 goto exp_mem
	
	REM other error...
	echo Unable to continue.
	echo.
	goto exit
	
	:exp_spc
	echo There is not enough free space on drive C.
	echo.
	echo To install MS-DOS 6.2, drive C must contain at least 6.5 MB
	echo of free space.
	echo.
	goto exit
	
	:exp_bad
	echo The archive file (1MSDOS62.EXE or 2MSDOS62.EXE) might be
	corrupted.
	echo.
	echo To continue, obtain a new copy of the MS-DOS 6.2 archive files.
	echo.
	goto exit
	
	:exp_mem
	echo There is not enough free conventional memory to extract the
	echo MS-DOS 6.2 Step-Up files.
	echo.
	echo To continue, edit your CONFIG.SYS or AUTOEXEC.BAT files and use
	echo the REM command to temporarily disable any unnecessary device
	echo drivers or memory-resident programs. Then, restart your computer
	echo and run SETUP.BAT again.
	echo.
	goto exit
	
	REM ---- MAKESYS errors ----
	
	:mksys_err
	echo.
	echo.
	echo The MAKESYS utility could not complete. For more information,
	echo see the MAKESYS section of the README.NOW file.
	echo.
	echo When you have read the README.NOW file and are ready to try
	again,
	echo change to the C:\STEPUP directory and type MAKESYS. If MAKESYS
	echo completes successfully, then type SETUP at the command prompt.
	echo You do not need to run this batch file (SETUP.BAT) again.
	echo.
	goto exit
	
	REM ---- MS-DOS Setup error ----
	
	:setup_err
	echo.
	echo MS-DOS 6.2 Setup could not complete.
	echo.
	echo Follow the instructions in Setup's error message (if any).
	echo When you are ready to try running Setup again, change to the
	echo C:\STEPUP directory and type SETUP at the command prompt.
	echo You do not need to run this batch file (SETUP.BAT) again.
	echo.
	echo If you quit Setup by pressing F3, you can restart it
	echo by changing to the C:\STEPUP directory and typing SETUP.
	echo.
	goto exit
	
	:exit
	
	Additional query words: 6.20 bbsstepup stepup
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS620
	Version           : MS-DOS:6.2
	
	=============================================================================
	
