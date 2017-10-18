---
layout: page
title: "Q75143: Using DISPLAY.SYS and PRINTER.SYS Drivers with QEMM"
permalink: kb/075/Q75143/
---

## Q75143: Using DISPLAY.SYS and PRINTER.SYS Drivers with QEMM

	Article: Q75143
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	According to Quarterdeck, the MS-DOS version 5.0 DISPLAY.SYS and PRINTER.SYS
	utilities cannot be successfully loaded into upper memory with the LOADHI.SYS
	that is included with QEMM-386 5.13 and earlier, QEMM - 50/60 5.00 and earlier,
	and QRAM 1.01 and earlier.
	
	
	MORE INFORMATION
	================
	
	You can load these drivers into low memory or you can use the MS-DOS 5.0
	DEVICEHIGH command, provided you have a 386 or better processor with at least 1
	MB of RAM. The following configuration in CONFIG.SYS file assumes you have the
	physical requirements to load devices high, and the MS-DOS 5.0 files are in the
	C:\DOS directory.
	
	  DEVICE=C:\DOS\HIMEM.SYS
	  DEVICE=C:\DOS\EMM386.EXE noems
	  DOS=HIGH,UMB
	  DEVICEHIGH=C:\DOS\DISPLAY.SYS
	  DEVICEHIGH=C:\DOS\PRINTER.SYS
	
	REFERENCES
	==========
	
	For more information on loading devices and terminate-and-stay- resident
	programs (TSRs) high, please see Chapter 12, "Optimizing Your System," in the
	version 5.0 "Microsoft MS-DOS User's Guide and Reference."
	
	The Quarterdeck products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x
	
	=============================================================================
	
