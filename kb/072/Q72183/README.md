---
layout: page
title: "Q72183: Loading MS-DOS 5.0 TSRs and Device Drivers into UMBs"
permalink: /kb/072/Q72183/
---

## Q72183: Loading MS-DOS 5.0 TSRs and Device Drivers into UMBs

	Article: Q72183
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following are device drivers included with MS-DOS version 5.0 that are safe
	to load into upper memory blocks (UMBs):
	
	  EGA.SYS          DISPLAY.SYS     ANSI.SYS
	  RAMDRIVE.SYS     SMARTDRV.SYS    DRIVER.SYS
	  PRINTER.SYS
	
	The following are terminate-and-stay-resident (TSR) programs included with MS-DOS
	5.0 that are safe to load into UMBs:
	
	  DOSKEY.COM       DOSSHELL.COM    KEYB.COM     SETVER.EXE  GRAFTABL.COM
	  GRAPHICS.COM     NLSFUNC.EXE     MODE.COM     ASSIGN.COM
	  SHARE.EXE        PRINT.EXE       APPEND.EXE   FASTOPEN.EXE
	
	MIRROR.COM will automatically load high (into a UMB). For more information, query
	on the following words:
	
	  "MIRROR" (without the quotation marks) and "UMB" (without the quotation
	  marks) and "5.00" (without the quotation marks)
	
	MORE INFORMATION
	================
	
	For each device driver (from the above list) that you want to load into a UMB,
	do the following:
	
	Note: Device drivers are loaded through the CONFIG.SYS file with a DEVICE= line.
	
	1. Make sure DEVICE=HIMEM.SYS is loaded above the DEVICE=EMM386.EXE line and
	  that the line DOS=HIGH,UMB is in the CONFIG.SYS file.
	
	2. Change the DEVICE= line, which is used to load the following device drivers,
	  to DEVICEHIGH= in the CONFIG.SYS file. For example:
	
	  devicehigh=c:\dos\ansi.sys
	
	For each TSR that is loaded in your AUTOEXEC.BAT file and is safe to load into a
	UMB, add the LOADHIGH (LH) command before the TSR. (LH is equivalent to
	LOADHIGH.) For example, you can change the line
	
	  c:\dos\doskey
	
	to the following:
	
	  lh c:\dos\doskey
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
