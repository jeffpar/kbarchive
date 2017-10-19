---
layout: page
title: "Q85410: MS-DOS 5.0a Upgrade README.TXT: Memory Management"
permalink: /kb/085/Q85410/
---

## Q85410: MS-DOS 5.0a Upgrade README.TXT: Memory Management

	Article: Q85410
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
	
	3. NOTES ON MEMORY MANAGEMENT
	-----------------------------
	
	3.1 386MAX (5.11 or Earlier):
	
	If you have used the SETVER command to report a different version number to a
	program you are loading into the upper memory area with 386LOAD.COM or
	MAXHI.COM, also use the SETVER command to report that number to 386LOAD.COM or
	MAXHI.COM. For information about the SETVER command, see Chapter 14 of the
	MS-DOS User's Guide and Reference.
	
	The new version number is reported to all programs loaded by 386LOAD.COM and
	MAXHI.COM.
	
	MAXHI.COM programs supplied with versions of 386MAX earlier than 5.0 are
	incompatible with MS-DOS 5.0.
	
	3.2 All Computers Inc. Expanded-Memory Driver (ALLEMM4.SYS):
	
	Version 2.5 or later of the All Computers expanded-memory driver (ALLEMM4.SYS) is
	compatible with MS-DOS 5.0 HIMEM.SYS. Contact All Computers to get an updated
	driver.
	
	3.3 Problems Loading into the Upper Memory Area:
	
	Some computers with bus master DMA controllers may not be able to load device
	drivers or programs into the upper memory area. Try adding a DEVICE=SMARTDRV.SYS
	command before any DEVICEHIGH commands in your CONFIG.SYS file.
	
	3.4 Intel Expanded-Memory Driver (EMM.SYS):
	
	If you use Intel's EMM.SYS driver with Aboveboard, use EMM.SYS version 4.0
	revision D or later. If you have an earlier version, contact Intel for a free
	upgrade.
	
	3.5 XMAEM.SYS and XMA2EMS.SYS:
	
	Setup disables the CONFIG.SYS commands that load XMAEM.SYS and XMA2EMS.SYS. If
	your system uses both drivers, replace the commands with a DEVICE=EMM386.EXE
	command in your CONFIG.SYS file.
	
	If your system includes an XMA card, remove the REM command that precedes the
	DEVICE=XMA2EMS.SYS command in your CONFIG.SYS file.
	
	Additional query words: 5.00a update noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500a
	Version           : :5.0a
	
	=============================================================================
	
