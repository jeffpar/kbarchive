---
layout: page
title: "Q72162: MS-DOS 5 README.TXT: Notes on Windows"
permalink: kb/072/Q72162/
---

## Q72162: MS-DOS 5 README.TXT: Notes on Windows

	Article: Q72162
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 README.TXT file.
	This is the packaged product of MS-DOS version 5.0 that is licensed to OEMs
	(original equipment manufacturers).
	
	MORE INFORMATION
	================
	
	5. NOTES ON WINDOWS
	-------------------
	
	5.1 DOS Applications in Expanded Memory:
	
	If you load device drivers and memory-resident programs into the upper memory
	area, and you run DOS applications that use expanded memory under Windows 3.0,
	specify the RAM switch with the DEVICE=EMM386.EXE command in your CONFIG.SYS
	file.
	
	5.2 "Unable to start Enhanced Mode Windows" Message:
	
	If you start Windows enhanced mode 3.0, and get a message stating "EMM386: Unable
	to start Enhanced Mode Windows due to invalid path specification for EMM386",
	add the /y=path switch to the DEVICE=EMM386.EXE command in your CONFIG.SYS file.
	"Path" specifies the location of the EMM386.EXE file when you start Windows.
	
	For example, if the EMM386.EXE file is in the \DOS directory on drive C, your
	command would look like this:
	
	  DEVICE=EMM386.EXE /y=c:\dos\emm386.exe
	
	5.3 WINA20.386 File:
	
	Setup installs a read-only file named WINA20.386 in your root directory.
	
	If you move the WINA20.386 file to a different directory, do the following:
	
	1. Add a SWITCHES=/W command to your CONFIG.SYS file.
	
	2. Add a DEVICE=[drive:][path]]WINA20.386 command to the [386Enh] section of
	  your Windows SYSTEM.INI file.
	
	5.4 "High Memory Area in Use" Message (Windows/386 2.1):
	
	You cannot run Windows/386 2.1 when MS-DOS 5.0 is loaded into the high memory
	area. Also, the MS-DOS 5.0 versions of SMARTDRV.SYS and RAMDRIVE.SYS are not
	compatible with Windows/386 2.1. To run Windows/386 2.1 with MS-DOS 5.0, use the
	versions of SMARTDRV.SYS and RAMDRIVE.SYS that came with Windows and remove the
	DOS=HIGH command, if any, from your CONFIG.SYS file.
	
	5.5 "Cannot run Windows in standard mode" Message:
	
	If you have a DEVICE=EMM386.EXE command in your CONFIG.SYS file, you cannot run
	Windows 3.0 in standard mode. Either remove the DEVICE=EMM386.EXE command or run
	Windows in real or enhanced mode.
	
	NOTE: Using EMM386 may reduce the amount of extended memory available to Windows
	and cause Windows to try to start in standard mode. To prevent this, reduce the
	amount of extended memory that other device drivers use. For example, if you are
	using SMARTDrive, try setting the MinCacheSize parameter to 0.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	
