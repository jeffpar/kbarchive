---
layout: page
title: "Q71634: Loading 10net Redirector High Hangs Unisys Workstation"
permalink: kb/071/Q71634/
---

## Q71634: Loading 10net Redirector High Hangs Unisys Workstation

	Article: Q71634
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Loading one part of the 10net redirector (10NET.EXE) high into the upper memory
	blocks (UMBs) causes the Unisys 386 workstation to hang. A cold boot is required
	to restart the workstation.
	
	This is NOT a problem with MS-DOS version 5.0; this is a problem with the DCA
	10net software. There are two problems with the 10NET.EXE file:
	
	1. 10NET.EXE moves its code to 64K above the current code segment without
	  checking the top of memory value in the program segment prefix. If it is
	  loaded into a UMB, results may be unpredictable.
	
	2. 10NET.EXE's header has a nonzero initial system stack (SS) value and a zero
	  initial stack pointer (SP) value. When DOS pushes the return address on the
	  user stack to transfer control, it actually goes into the 64K region above
	  the SS. This mode of control transfer may lead to unpredictable results. In
	  the case of loading into UMBs, it could be pointing to ROM or an unmapped
	  region.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
