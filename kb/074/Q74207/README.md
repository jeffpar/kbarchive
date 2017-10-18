---
layout: page
title: "Q74207: MS-DOS Backup Err Msg: Could Not Allocate Segment"
permalink: kb/074/Q74207/
---

## Q74207: MS-DOS Backup Err Msg: Could Not Allocate Segment

	Article: Q74207
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under low memory situations, the MS-DOS 5.0 Backup program will report the
	following error message:
	
	  Could Not Allocate Segment
	
	MORE INFORMATION
	================
	
	This error message is most likely to occur when you are shelled out of an
	application. There are only two options if you are shelled out of an application
	and cannot use Backup because there is not enough memory. Either more memory
	must be freed up before the application is started, or memory usage by the
	program must be reduced before you shell out to DOS.
	
	To free up more memory before starting an application, reduce the number of
	device drivers and memory resident utilities loaded in the CONFIG.SYS and
	AUTOEXEC.BAT files. If you have an 386 computer, you can use EMM386.EXE to load
	these items into upper memory.
	
	Consult your application documentation or contact your vendor to determine how to
	free up more memory in an application before shelling out to an MS-DOS prompt.
	
	For more information on loading device drivers and memory resident programs into
	upper memory, consult chapter 12, "Optimizing Your System," of the "Microsoft
	MS-DOS User's Guide and Reference," or query on the following words:
	
	  MSDOS and DEVICEHIGH and EMM386.EXE and LOADHIGH
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
