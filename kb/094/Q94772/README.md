---
layout: page
title: "Q94772: MemMaker Err Msg: &quot;SIZER: UMBs Overran List Buffer&quot;"
permalink: kb/094/Q94772/
---

## Q94772: MemMaker Err Msg: &quot;SIZER: UMBs Overran List Buffer&quot;

	Article: Q94772
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the MS-DOS MemMaker utility on a system with a Periscope board, the
	following error message may be displayed:
	
	  SIZER: UMB's overran list buffer.
	
	CAUSE
	=====
	
	MemMaker detects the first 24 kilobytes (K) of protected memory used by the
	Periscope board, but does not detect the last 8K. Therefore, when MemMaker adds
	the x= parameter, it does not exclude a large enough range.
	
	WORKAROUND
	==========
	
	To work around this problem, add the x= switch to the device= line for EMM386 to
	exclude the C800-CFFF range. For example:
	
	  device=c:\dos\emm386.exe x=c800-cfff
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
