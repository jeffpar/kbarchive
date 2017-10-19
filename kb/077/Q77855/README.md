---
layout: page
title: "Q77855: Lotus 1-2-3 Versions 3.x and EMM386.EXE"
permalink: /kb/077/Q77855/
---

## Q77855: Lotus 1-2-3 Versions 3.x and EMM386.EXE

	Article: Q77855
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Lotus 1-2-3 for DOS is a virtual control program interface (VCPI) compliant
	application. VCPI is an extension to the Expanded Memory Services (EMS)
	specification that allows MS-DOS-based applications to directly access extended
	memory on an 80386 or higher processor.
	
	To use Lotus 1-2-3 in combination with EMM386.EXE, you must configure EMM386.EXE
	to provide VCPI services and some VCPI memory. If you try to run Lotus 1-2-3
	without providing VCPI services, Lotus 1-2-3 displays an error message and fails
	to start.
	
	MORE INFORMATION
	================
	
	To configure EMM386.EXE to provide VCPI services and VCPI memory, use the RAM
	parameter on the EMM386 command line. For example:
	
	  DEVICE=C:\DOS\EMM386.EXE RAM
	
	Keep in mind that the above line creates a 64-kilobyte (K) page frame in the
	upper memory area (UMA). This reduces the amount of memory that is available for
	loading programs in upper memory (high). If your program ONLY needs LIM 4.0
	expanded memory, you can specify the P switch as shown below. This creates a 16K
	page frame in the UMA.
	
	  DEVICE=C:\DOS\EMM386.EXE RAM P0=D000
	
	NOTE: This works only if your programs do NOT need LIM 3.2 expanded memory. D000
	is the starting address of a 16K page frame and can be replaced by any upper
	memory address that is available.
	
	Providing VCPI Without an EMS Page Frame
	----------------------------------------
	
	If you are using EMM386.EXE version 4.45 (the version included with MS-DOS 6.0)
	or later, you can provide VCPI services and VCPI memory without dedicating UMA
	space to an EMS page frame. To do this, specify the NOEMS switch along with a
	number that indicates the amount of VCPI memory to provide in kilobytes. For
	example:
	
	  DEVICE=C:\DOS\EMM386.EXE NOEMS 256
	
	The 256 on this command tells EMM386 to provide 256K of VCPI memory.
	
	If you are using a version of EMM386.EXE earlier than 4.45, you may be able to
	provide sufficient VCPI services without dedicating UMA space to an EMS page
	frame. To do this, specify both the RAM and the FRAME=NONE switches on EMM386.
	For example:
	
	  DEVICE=C:\DOS\EMM386.EXE RAM FRAME=NONE
	
	REFERENCES
	==========
	
	For more information about EMM386.EXE, refer to the your printed MS-DOS
	documentation, or if you are using MS-DOS 6.0, 6.2, 6.21, or 6.22, type "help
	emm386.exe" (without the quotation marks) at the MS-DOS command prompt and press
	ENTER.
	
	For more information about VCPI-compliant applications and EMM386.EXE, query on
	the following words in the Microsoft Knowledge Base:
	
	  "vcpi" (without the quotation marks) and "emm386" (without the quotation
	  marks)
	
	Lotus 1-2-3 is manufactured by Lotus Development Corporation, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	
	Additional query words: 5.00 5.00a 6.00 6.20 123 3rdparty one two three spreadsheet dos/16m error: specifications
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
