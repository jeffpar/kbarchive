---
layout: page
title: "Q75129: Stacker Coprocessor Card with MS-DOS 5.0 and EMM386.EXE"
permalink: /kb/075/Q75129/
---

## Q75129: Stacker Coprocessor Card with MS-DOS 5.0 and EMM386.EXE

	Article: Q75129
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
	
	STAC Electronics manufactures a coprocessor card that works in conjunction with
	the Stacker Disk Compression Software Utility. Some additional steps are
	necessary when you use a Stacker Coprocessor Card with MS-DOS version 5.0 and
	EMM386.EXE.
	
	MORE INFORMATION
	================
	
	Stacker is a disk compression utility used to obtain more space on a hard drive.
	A Stacker Coprocessor Card can be used in addition to the stacker software to
	increase the amount of file compression provided by this software. The card is
	also used to speed up the stacker compression/decompression process and allows
	for a smaller "stacker" device driver. The Stacker Coprocessor Card does NOT
	emmulate a "math-coprocessor".
	
	The card is addressed in the upper memory area and does not deal with the high
	memory area. Therefore, DOS can be loaded high without problems from the
	coprocessor card. It is very similar to a network card where the range it uses
	in memory must be excluded from the upper memory area.
	
	When the Stacker card is used, a driver for it can be found in the CONFIG.SYS
	file, as follows:
	
	  device=[drive:][path]\stacker.com /b=<address> c:\stacvol.000
	
	(Note: The default for the address is CC00.)
	
	If EMM386.EXE is loaded in CONFIG.SYS, the range the coprocessor card uses must
	be excluded. The "device=" line above indicates the starting range. From this
	point, refer to page 17 of the Stacker manual for a table showing proper memory
	ranges for that card (usually the starting address + 16K). The EMM386.EXE line
	should then be modified accordingly, as follows:
	
	  device=c:\dos\emm386.exe X=<xxxx-yyyy>
	
	(Note: The default is X=cc00-cfff.)
	
	The product included here, Stacker, is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 5.00 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
