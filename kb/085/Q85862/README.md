---
layout: page
title: "Q85862: Err Msg: Error Loading PROGMAN.EXE"
permalink: kb/085/Q85862/
---

## Q85862: Err Msg: Error Loading PROGMAN.EXE

	Article: Q85862
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	3.00 3.00a 3.10 3.11 | 6.00 6.20 6.21 6.22
	WINDOWS              | MS-DOS
	kbsetup kbtool
	
	SYMPTOMS
	========
	
	You may receive the following error message when you try to start Microsoft
	Windows or run Microsoft Windows Setup:
	
	  Error Loading PROGMAN.EXE
	
	CAUSE
	=====
	
	The following can cause of this error message:
	
	- An incorrect or missing SHELL= line in the [boot] section of the SYSTEM.INI
	  file
	
	- An incorrect version of the SHELL.DLL file
	
	- VSafe program
	
	- A CHKLIST.MS file in the Windows directory
	
	- The [boot] section heading is missing in your SYSTEM.INI file.
	
	- The PROGMAN.INI file is corrupt.
	
	
	MORE INFORMATION
	================
	
	The following sections cover the different causes of the above error message.
	
	Incorrect or Missing SHELL= Line
	--------------------------------
	
	You receive the error message if the SHELL= line in the [boot] section of your
	SYSTEM.INI file is missing or is set to a file that does not exist. Under
	Windows version 3.0, you receive an unrecoverable application error (UAE) if the
	SHELL= line is missing or set incorrectly.
	
	The SHELL= line in the [boot] section of the SYSTEM.INI file should read as
	follows:
	
	       SHELL=PROGMAN.EXE
	
	If this error continues, or if an undefined dynalink error occurs, check the
	[boot] section in the SYSTEM.INI file for the line referring to SYSTEM.DRV=.
	This line must be present and should read as follows (unless it is modified by a
	third-party application, such as Adobe Type Manager):
	
	       SYSTEM.DRV=SYSTEM.DRV
	
	Incorrect Version of SHELL.DLL
	------------------------------
	
	Earlier releases of the SHELL.DLL file may prevent Program Manager from starting.
	Use the EXPAND utility (EXPAND.EXE) to expand the correct version of SHELL.DLL
	to the Windows SYSTEM directory. The following is an example of the command to
	be used with the EXPAND utility from Windows 3.1:
	
	  expand <a>:shell.dl_ <c>:\windows\system\shell.dll
	
	The drive letters (<a> and <c> in this example) vary depending on the
	location of the source and destination of your files. SHELL.DL_ can be found on
	Disk 5 (5.25-inch) or on Disk 4 (3.5-inch) of the Windows 3.1 operating system
	disks.
	
	Earlier versions of PROGMAN.EXE do not work with the new SHELL.DLL file. Use the
	EXPAND command to expand the correct version of PROGMAN.EXE to the Windows
	directory. For example, if you are expanding PROGMAN.EX from a disk in drive a
	to C:\WINDOWS, type the following command:
	
	  expand a:progman.ex_ c:\windows\progman.exe
	
	The drive letters (<a> and <c> in this example) vary depending on the
	location of the source and destination of your files. PROGMAN.EX_ can be found
	on Disk 4 (5.25-inch) or on Disk 4 (3.5-inch) of the Windows 3.1 operating
	system disks.
	
	
	VSafe Virus-Scanning Software
	-----------------------------
	
	The VSAFE.SYS and/or VSAFE.COM virus-protection programs can cause the above
	error message. To correct this problem, remove VSAFE.SYS from the CONFIG.SYS
	file, and remove VSAFE.COM from the LOAD= line in the WIN.INI file and your
	Startup group.
	
	CHKLIST.MS File in the Windows Directory
	----------------------------------------
	
	Microsoft Anti-Virus creates CHKLIST.MS files and places them in almost every
	directory that it checks. If a CHKLIST.MS file is placed in the Windows
	directory, the error message above is generated. To correct this problem, delete
	the CHKLIST.MS file from your Windows directory.
	
	NOTE: The file may be reinserted in the directory the next time you use
	Anti-Virus; you must delete the file again if the error message reappears.
	
	The [boot] Section Heading is Missing in Your SYSTEM.INI File
	-------------------------------------------------------------
	
	To correct this problem use a text editor such as Microsoft MS-DOS Editor to edit
	the SYSTEM.INI file and add the correct heading.
	
	The PROGMAN.INI File is Corrupt
	-------------------------------
	
	To correct this problem use a text editor such as Microsoft MS-DOS Editor to edit
	the PROGMAN.INI file and correct entries.
	
	Additional query words: 3.0 3.00 3.00a 3.0a 3.10 3.1 6.00 6.20 install installing setup.exe
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : :3.0,3.0a,3.1,3.11,6.0,6.2,6.21,6.22
	
	=============================================================================
	
