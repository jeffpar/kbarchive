---
layout: page
title: "Q78506: Additional EMM386.EXE Include Ranges with AMI BIOS"
permalink: /kb/078/Q78506/
---

## Q78506: Additional EMM386.EXE Include Ranges with AMI BIOS

	Article: Q78506
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
	
	American Megatrends Incorporated (AMI) has confirmed that when EMM386.EXE is
	used on a computer with an AMI BIOS, the upper memory ranges E000-EFFF and
	F000-F3FF can be included with the i= parameter.
	
	This available upper memory can be used for loading terminate-and-stay- resident
	programs (TSRs), device drivers, or for setting a LIM 3.2 expanded memory page
	frame (at E000).
	
	MORE INFORMATION
	================
	
	The E000-EFFF range gives EMM386.EXE control of an additional 64K of upper
	memory, and the F000-F3FF gives control of an additional 16K of upper memory.
	
	The DEVICE statement in the CONFIG.SYS file should be modified to include this
	range as follows (without providing LIM 3.2 expanded memory support):
	
	  device=c:\dos\emm386.exe i=E000-EFFF i=F000-F3FF noems
	
	To provide expanded memory support, the following example may be used:
	
	  device=c:\dos\emm386.exe I=F000-F3FF ram M9
	
	The AMI product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 5.00 image 3rdparty 5.00a 5.x 5.0a
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a
	
	=============================================================================
	
