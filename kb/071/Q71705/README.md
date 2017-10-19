---
layout: page
title: "Q71705: Position of the DOS=HIGH Command in CONFIG.SYS"
permalink: /kb/071/Q71705/
---

## Q71705: Position of the DOS=HIGH Command in CONFIG.SYS

	Article: Q71705
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
	
	When loading Microsoft MS-DOS into high memory, DOS=HIGH and DEVICE statements
	for the XMS driver do not have to be the first two entries in the CONFIG.SYS
	file.
	
	This information applies to MS-DOS version 5.0.
	
	MORE INFORMATION
	================
	
	The DOS=HIGH statement can appear on any line in the CONFIG.SYS file. After
	finding the DOS=HIGH statement, MS-DOS loads each device driver starting at the
	beginning of the CONFIG.SYS file. When the XMS driver is loaded, MS-DOS
	relocates into high memory. Because the device drivers are loaded in the order
	they appear in the file, any device driver that needs XMS memory should appear
	after the XMS driver.
	
	Only DEVICEHIGH statements in the CONFIG.SYS file that appear after the XMS
	driver and the UMB provider will be loaded into the upper memory area (UMA).
	When using MS-DOS 5.0 memory management, this means DEVICEHIGH statements must
	appear after the HIMEM.SYS and EMM386.EXE drivers.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
