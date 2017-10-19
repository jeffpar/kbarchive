---
layout: page
title: "Q173834: NT 4.0 Resource Kit Setup Hangs"
permalink: /kb/173/Q173834/
---

## Q173834: NT 4.0 Resource Kit Setup Hangs

	Article: Q173834
	Product(s): Microsoft Press
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit ISBN 1-57231-344-7 
	- MSPRESS Microsoft Windows NT Workstation 4.0 Resource Kit ISBN 1-57231-343-9 
	- MSPRESS Microsoft Windows NT Server 4.0 Resource Kit, Supplement One ISBN 1-57231-559-8 
	-------------------------------------------------------------------------------
	
	*********************************************************************
	**                           - WARNING -                           **
	**     THE INFORMATION BELOW IS PRELIMINARY AND HAS NOT BEEN       **
	**     CONFIRMED, EDITED, OR TESTED BY MICROSOFT. USE ONLY         **
	**     WITH DISCRETION.                                            **
	*********************************************************************
	
	SYMPTOMS
	========
	
	During the installation process, Setup.exe may hang after you click either
	Typical or Custom Setup. Task Manager will show that the Setup program is using
	100% of the CPU cycles.
	
	WORKAROUND
	==========
	
	Make sure that all of the following services are stopped before running
	Setup.exe from the Windows NT 4.0 Resource Kit CD-ROM:
	
	- dbWeb
	
	- WWW
	
	- FTP
	
	- DHCP
	
	-or-
	
	Use a manual installation by following these steps:
	
	NOTE: These steps will not install the following programs: Desktop Themes, Perl,
	Web Administration, WCAT, Internet Explorer, RAS Manager, or Crystal Reports.
	Each of these programs can be installed separately from the Resource Kit CD-ROM
	without using the Resource Kit main setup program. For more information, please
	see the Readme.txt file in the root directory of the Resource Kit CD-ROM.
	
	1. In the Control Panel, double-click the System icon.
	
	2. In the System Properties window, select the Environment tab.
	
	3. Add the following entry to the System variables:
	
	  " Variable: %NTRESKIT%
	  Path: C:\NTRESKIT" (without the quotation marks)
	
	4. Click OK to close the System Properties window and save your changes.
	
	5. Copy the following batch file to a file named Rkcopy.bat, and then run the
	  batch file from the Command Prompt.
	
	Rkcopy.bat
	----------
	
	@ECHO OFF
	REM *** Note that this batch file is designed for Intel platforms.
	REM *** Please modify this batch file as necessary for use with other
	REM *** platforms.
	REM
	ECHO ************************************************************
	ECHO * NT 4.0 (Server) Resource Kit                             *
	ECHO * Manual installation created 2/6/97                       *
	ECHO * Last modification 9/2/97                                 *
	ECHO * Requires 66 MB free disk space (46 MB final install size)*
	ECHO *    NOTE: This setup is not supported.                    *
	ECHO ************************************************************
	ECHO -
	ECHO Press CTRL+C to exit, or
	pause
	
	REM *** RESKIT source and destination settings <--------
	REM *** (Change if necessary)
	SET RKDEST=C:\NTResKit
	SET RKSOURCE=D:\I386\ 
	
	MKDIR  %RKDEST%
	
	echo Copying Platform-Specific Files
	XCOPY %RKSOURCE%COMMON\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%COMPDIAG\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%CONFIG\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%DESKTOP\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%FAULTTOL\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%FILEBAT\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%GNU\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%INET\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%NETADMIN\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%NETDIAG\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%PERFTOOL\*.* /S /F %RKDEST%\PERFTOOL  /I
	XCOPY %RKSOURCE%REGISTRY\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%SETUP\*.* /S /F %RKDEST%
	
	SET RKSOURCE=D:\COMMON\ 
	
	echo Copying Common Files
	XCOPY %RKSOURCE%COMMON\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%COMPDIAG\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%CONFIG\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%DESKTOP\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%FAULTTOL\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%FILEBAT\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%INET\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%NETADMIN\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%NETDIAG\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%PERFTOOL\*.* /S /F %RKDEST%\PERFTOOL /I
	XCOPY %RKSOURCE%REGISTRY\*.* /S /F %RKDEST%
	XCOPY %RKSOURCE%SETUP\*.* /S /F %RKDEST%
	
	echo Copying Online Documentation
	XCOPY %RKSOURCE%docs\*.* /S /F %RKDEST%
	
	ECHO Deleting %RKDEST%\PERFTOOL\PROBE\EXAMPLES\WORKFILE\WORKFILE.DAT (19.5
	Meg file, usually not needed)
	DEL %RKDEST%\PERFTOOL\PROBE\EXAMPLES\WORKFILE\WORKFILE.DAT
	
	ECHO NT 4.0 Resource Kit file copy completed.
	
	STATUS
	======
	
	This problem was corrected in Microsoft Windows NT 4.0 Server Resource Kit,
	Supplement Two, ISBN 1-57231-626-8.
	
	Additional query words: mspress ms_press press ntrk ntreskit 1-57231-344-7 1-57231-343-9 1-57231-559-8
	
	======================================================================
	Keywords          :  
	Technology        : kbMSPressSearch kbZNotKeyword6 kbZNotKeyword2 kbZNotKeyword3
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
