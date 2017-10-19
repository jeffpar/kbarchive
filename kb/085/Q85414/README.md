---
layout: page
title: "Q85414: MS-DOS 5.0a Upgrade README.TXT: Notes on Windows"
permalink: /kb/085/Q85414/
---

## Q85414: MS-DOS 5.0a Upgrade README.TXT: Notes on Windows

	Article: Q85414
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5.0a Upgrade
	README.TXT file.
	
	MORE INFORMATION
	================
	
	4. NOTES ON WINDOWS
	-------------------
	
	4.1 Windows/286 2.1:
	
	If you run Windows/286 2.1 with MS-DOS 5.0, use PIF Editor to specify a value of
	128 in the KB Required option for COMMAND.COM. For information about using PIF
	Editor and PIF options, see the Microsoft Windows User's Guide.
	
	4.2 "High Memory Area in Use" Message (Windows/386 2.1):
	
	You cannot run Windows/386 2.1 when MS-DOS 5.0 is loaded into the high memory
	area. Also, the MS-DOS 5.0 versions of SMARTDRV.SYS and RAMDRIVE.SYS are not
	compatible with Windows/386 2.1. To run Windows/386 2.1 with MS-DOS 5.0, use the
	versions of SMARTDRV.SYS and RAMDRIVE.SYS that came with Windows and remove the
	DOS=HIGH command, if any, from your CONFIG.SYS file.
	
	4.3 "Cannot run Windows in standard mode" Message:
	
	If you have a DEVICE=EMM386.EXE command that includes the RAM or NOEMS switch in
	your CONFIG.SYS file, you cannot run Windows 3.0 in standard mode. Either remove
	the RAM or NOEMS switch or run Windows in real or enhanced mode. (If you remove
	RAM or NOEMS, you won't be able to load programs and device drivers into the
	upper memory area. If you include RAM or NOEMS, you won't be able to run Windows
	in standard mode.)
	
	NOTE: Using EMM386 may reduce the amount of extended memory available to Windows
	and cause Windows to try to start in standard mode. To prevent this, reduce the
	amount of extended memory that other device drivers use. For example, if you are
	using SMARTDrive, try setting the MinCacheSize parameter to 0.
	
	Additional query words: 5.00a update noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500a
	Version           : :5.0a
	
	=============================================================================
	
