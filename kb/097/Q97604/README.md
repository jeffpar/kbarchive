---
layout: page
title: "Q97604: Using MemMaker with a Drive That Requires a Device Driver"
permalink: /kb/097/Q97604/
---

## Q97604: Using MemMaker with a Drive That Requires a Device Driver

	Article: Q97604
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If your boot drive (usually drive C) cannot be written to until a device driver
	is loaded, MemMaker cannot function properly. To work around this problem,
	perform the following steps:
	
	1. Use the SYS command to create an MS-DOS startup (boot) floppy disk. For
	  example, from the MS-DOS command prompt, type "SYS C: A:" (without the
	  quotation marks) and press ENTER.
	
	2. Copy MEMMAKER.EXE, CHKSTATE.SYS, HIMEM.SYS, EMM386.EXE, and SIZER.EXE to the
	  startup floppy disk in drive A.
	
	3. Copy your CONFIG.SYS and AUTOEXEC.BAT files to the floppy disk in drive A and
	  modify them as appropriate to cause them to restart the system properly. For
	  example, if you have a device statement such as "device=drv.sys", modify the
	  statement to explicitly look at drive C ("device=c:\drv.sys").
	
	4. With the floppy disk in drive A, restart computer.
	
	5. From the MS-DOS command prompt on drive A, type "MEMMAKER" (without the
	  quotation marks) and press ENTER.
	
	6. When MemMaker is finished, copy the modified CONFIG.SYS and AUTOEXEC.BAT
	  files to drive C.
	
	7. Using MS-DOS Editor, edit the CONFIG.SYS and AUTOEXEC.BAT file to ensure the
	  path statements for HIMEM.SYS and EMM386.EXE point to the hard drive. For
	  example, make sure the device statement for HIMEM.SYS is
	  DEVICE\C:\DOS\HIMEM.SYS, and not DEVICE=A:\HIMEM.SYS.
	
	Additional query words: 6.22 6.0 loops boot bootup bootdisk hardcard Plus II XL ATDOSXL.SYS 6.2
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
