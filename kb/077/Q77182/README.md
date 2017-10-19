---
layout: page
title: "Q77182: Using MS-DOS 5.0 or later EMM386.EXE on Altima NSX"
permalink: /kb/077/Q77182/
---

## Q77182: Using MS-DOS 5.0 or later EMM386.EXE on Altima NSX

	Article: Q77182
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are trying to use the MS-DOS 5.0, 6.0, or 6.2 EMM386.EXE device driver on
	an Altima NSX 80386SX computer, the following message may be displayed:
	
	  EMM386 not installed - insufficient memory
	
	This message appears regardless of the amount of extended memory you have on your
	machine.
	
	CAUSE
	=====
	
	The Altima NSX computer is only available as an 80386SX system. The Altima NSX
	also has an 8-bit ROM that significantly reduces the system's floppy disk access
	time. As a result, Altima made some changes to the BIOS to compensate. The
	Altima NSX has an Award BIOS version 3.1.
	
	The changes to the BIOS include dedicating 64K of extended memory for shadow ROM
	and 320K of extended memory for EMS (expanded memory specification). Neither of
	these options can be disabled or turned off. Because of the nonstandard BIOS on
	the Altima NSX, EMM386.EXE cannot be used on these machines regardless of the
	amount of extended memory.
	
	WORKAROUND
	==========
	
	The only alternative is to use a third-party memory manager. According to
	Altima, Quarterdeck's QEMM can be used to successfully manage the upper memory
	area.
	
	MS-DOS can be loaded into the high memory area (HMA) on an Altima NSX 386SX by
	including the following lines in the CONFIG.SYS file:
	
	     device=[drive:][path]himem.sys
	     dos=high
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: 6.22 3.10 5.00 5.00a 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
