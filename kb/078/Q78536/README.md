---
layout: page
title: "Q78536: Shadow RAM Technical Information"
permalink: /kb/078/Q78536/
---

## Q78536: Shadow RAM Technical Information

	Article: Q78536
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
	
	This article explains what shadow RAM is and how you can use it.
	
	MORE INFORMATION
	================
	
	What Is Shadow RAM?
	-------------------
	
	Shadow RAM is best explained by means of an example. Most Compaq machines have a
	shadow RAM region for their video ROM. The original video ROM resides in the
	C000 segment, and typically extends from C000 to C6FF.
	
	In general, the execution time in RAM is less than that in ROM. So, to speed up
	the video performance, the video ROM is copied into fast 32-bit RAM. The system
	ROM BIOS maps this in from E000 to E6FF at boot time.
	
	When Would You Need to Reclaim Shadow RAM?
	------------------------------------------
	
	Because of the shadowing of the video ROM, the same ROM appears in two places,
	one in the C000 segment and the other in the E000 segment, although only one of
	them is used. Because of this, simulators like EMM386 will lose some upper
	memory block (UMB) space.
	
	Can Shadow RAM Be Used for Loading Devices?
	-------------------------------------------
	
	Some people may be able to use some of their shadow RAM for loading devices high.
	This is possible on some computers.
	
	As mentioned in the section above, the E000 segment is available for loading as a
	UMB, so programs can be loaded high into shadow RAM.
	
	It is also possible that your system ROM is itself shadowed. Typically, a shadow
	of the F000 segment is available in the E000 segment (or vice versa). In this
	case, it may be possible to use one or the other as a UMB by specifying the
	include option in EMM386, but this requires correct information about the
	hardware configuration.
	
	Using the HIMEM.SYS /shadowram:off Switch
	-----------------------------------------
	
	You can use the /shadowram:off switch on the DEVICE command for HIMEM.SYS. This
	switch instructs HIMEM.SYS to disable RAM shadowing; the shadow RAM then no
	longer appears in the E000 segment.
	
	Currently, the /shadowram:off switch works only on COMPAQ systems.
	
	The shadow RAM can be added to the XMS pool with HIMEM.SYS when the
	/shadowram:off switch is specified.
	
	How Do You Address Shadow RAM?
	------------------------------
	
	For real and virtual 86 modes, you can think of shadow RAM as physical memory
	addressed exclusively in the 640-1024K range.
	
	However, for protected mode, it is possible to access the actual physical address
	of the shadow RAM region by specifying its 32-bit address (if you know where it
	is physically located).
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	
