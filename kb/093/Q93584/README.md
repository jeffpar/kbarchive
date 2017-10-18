---
layout: page
title: "Q93584: EMM386.EXE: Default DMA Buffer Size"
permalink: kb/093/Q93584/
---

## Q93584: EMM386.EXE: Default DMA Buffer Size

	Article: Q93584
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
	
	EMM386.EXE's default direct memory access (DMA) buffer size has increased from
	16 to 32 kilobytes.
	
	MORE INFORMATION
	================
	
	The default DMA buffer size listed in the MS-DOS 6.0 Online Help for EMM386.EXE
	is 16 kilobytes. The Help is incorrect.
	
	All DMA buffers are stored in extended memory regardless of size.
	
	Additional query words: 6.22 6.00 docerr 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
