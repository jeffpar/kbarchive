---
layout: page
title: "Q71868: MS-DOS 5 Upgrade README.TXT: Memory Management"
permalink: kb/071/Q71868/
---

## Q71868: MS-DOS 5 Upgrade README.TXT: Memory Management

	Article: Q71868
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 Upgrade
	README.TXT file.
	
	MORE INFORMATION
	================
	
	3. NOTES ON MEMORY MANAGEMENT
	=============================
	
	3.1 386MAX (5.11 or Earlier)
	----------------------------
	
	If you have used the SETVER command to report a different version
	number to a program you are loading into the upper memory area with
	386LOAD.COM or MAXHI.COM, also use the SETVER command to report that
	number to 386LOAD.COM or MAXHI.COM. For information about the SETVER
	command, see Chapter 14 of the "MS-DOS User's Guide and Reference."
	
	The new version number is reported to all programs loaded by
	386LOAD.COM and MAXHI.COM.
	
	MAXHI.COM programs supplied with versions of 386MAX earlier than 5.0
	are incompatible with MS-DOS 5.0.
	
	3.2 All Computers Inc. Expanded-Memory Driver (ALLEMM4.SYS)
	-----------------------------------------------------------
	
	Version 2.5 or later of the All Computers expanded-memory driver
	(ALLEMM4.SYS) is compatible with MS-DOS 5.0 HIMEM.SYS. Contact All
	Computers to get an updated driver.
	
	3.3 Problems Loading into the Upper Memory Area
	-----------------------------------------------
	
	Some computers with hard disk controllers, specifically bus master DMA
	controllers, may not be able to load device drivers or programs into
	the upper memory area. Try adding a DEVICE=SMARTDRV.SYS command before
	any DEVICEHIGH commands in your CONFIG.SYS file.
	
	3.4 Installing HIMEM.SYS
	------------------------
	
	Setup does not install HIMEM.SYS if another extended-memory manager is
	active. If you want to install HIMEM.SYS, copy it to your disk by
	doing the following:
	
	1. Check the PACKING.LST file to determine which disk has the
	  HIMEM.SY_ file.
	2. Use the EXPAND command to expand and copy the file to your hard
	  disk. Name the file HIMEM.SYS.
	
	3.5 Intel Expanded-Memory Driver (EMM.SYS)
	------------------------------------------
	
	Use the Intel expanded-memory driver NE or E switch when installing an
	Aboveboard driver. See your Aboveboard documentation for more
	information.
	
	3.6 Phoenix BIOS and HIMEM.SYS
	------------------------------
	
	If your system includes a Phoenix BIOS and MS-DOS 5.0 doesn't work
	correctly, try adding a /machine:1 or /machine:8 switch to the
	DEVICE=HIMEM.SYS command in your CONFIG.SYS file.
	
	3.7 XMAEM.SYS and XMA2EMS.SYS
	-----------------------------
	
	Setup disables the CONFIG.SYS commands that load XMAEM.SYS and
	XMA2EMS.SYS. If your system uses both drivers, replace the commands
	with a DEVICE=EMM386.EXE command in your CONFIG.SYS file.
	
	If your system includes an XMA card, remove the REM command that
	precedes the DEVICE=XMA2EMS.SYS command in your CONFIG.SYS file.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
