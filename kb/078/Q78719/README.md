---
layout: page
title: "Q78719: Default Device Drivers in SETVER Table"
permalink: kb/078/Q78719/
---

## Q78719: Default Device Drivers in SETVER Table

	Article: Q78719
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The SETVER.EXE device driver included with Microsoft MS-DOS 5 Upgrade contains a
	table of default entries. This article contains a list of the default entries
	for SETVER.EXE.
	
	If SETVER.EXE is used to reference a device driver, SETVER must be entered before
	the specified device driver in the CONFIG.SYS file.
	
	MORE INFORMATION
	================
	
	If a device driver is loaded in the CONFIG.SYS file and is referenced in the
	SETVER table, that device driver must be loaded after SETVER.EXE in CONFIG.SYS.
	
	The following is an example of loading the device driver SSTDRIVE.SYS in
	CONFIG.SYS after SETVER.EXE:
	
	  device=c:\dos\setver.exe
	  device=c:\sstdrive.sys
	
	The default SETVER table as supplied in MS-DOS 5.0 contains the following
	entries:
	
	  WIN200.BIN 3.40
	  WIN100.BIN 3.40
	  WINWORD.EXE 4.10
	  EXCEL.EXE 4.10
	  HITACHI.SYS 4.00
	  MSCDEX.EXE 4.00
	  REDIR4.EXE 4.00
	  NET.EXE 4.00
	  NET.COM 3.30
	  NETWKSTA.EXE 4.00
	  DXMA0MOD.SYS 3.30
	  BAN.EXE 4.00
	  BAN.COM 4.00
	  MSREDIR.EXE 4.00
	  METRO.EXE 3.31
	  IBMCACHE.SYS 3.40
	  REDIR40.EXE 4.00
	  DD.EXE 4.01
	  DD.BIN 4.01
	  LL3.EXE 4.01
	  REDIR.EXE 4.00
	  SYQ55.SYS 4.00
	  SSTDRIVE.SYS 4.00
	  ZDRV.SYS 4.01
	  ZFMT.SYS 4.01
	  TOPSRDR.EXE 4.00
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 3rdparty 5.00 IMAGE setver dos 5.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
