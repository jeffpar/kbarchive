---
layout: page
title: "Q75137: AT&amp;T 6386E Hangs with RAM Option on EMM386"
permalink: /kb/075/Q75137/
---

## Q75137: AT&amp;T 6386E Hangs with RAM Option on EMM386

	Article: Q75137
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An expanded memory page frame set to DC00 or higher on a AT&T 6386E causes
	the system to stop responding (hang). For example, the following DEVICE=
	statement hangs the system.
	
	  DEVICE=EMM386.EXE m8 RAM
	
	CAUSE
	=====
	
	The AT&T 6386E has a ROM option at address E800 that is used during system
	operations. Setting a page frame to DC00 or higher overlaps with the ROM option,
	resulting in a hang.
	
	MORE INFORMATION
	================
	
	On some systems, you can set a page frame to DC00 or higher. For example,
	machines with AMI BIOS use the entire E000:EFFF area for the ROM setup program.
	To set a page frame at E000, make sure that the ROM option is never needed
	during normal system operation.
	
	The product included here is manufactured by AT&T, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
