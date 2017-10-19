---
layout: page
title: "Q95103: QBasic Supports Only COM1 and COM2"
permalink: /kb/095/Q95103/
---

## Q95103: QBasic Supports Only COM1 and COM2

	Article: Q95103
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	QBasic supports only serial communication ports COM1 and COM2. COM3 and COM4 are
	not supported. QBasic supports no more than two serial communications ports
	because QBasic is a subset of Microsoft QuickBasic 4.5, which also does not
	support COM3 and COM4.
	
	MORE INFORMATION
	================
	
	Microsoft does not support more than two serial COM ports with Microsoft
	QuickBasic versions 1.0 through 4.5 because of a combination of the following
	factors:
	
	1. MS-DOS 3.3 is the first operating system to support COM3 and COM4. It uses
	  ROM BIOS Interrupt 14h to access those COM ports.
	
	2. The ROM BIOS of a computer system must support COM3 and COM4.
	
	3. COM3 and COM4 have not been widely available on computer systems.
	
	4. A larger code size would be required for support due to the possible conflict
	  created by IRQ sharing; COM1 and COM3 use the same IRQ as do COM2 and COM4.
	
	Additional query words: 6.22 5.00 5.00a 6.00 6.20 6.21 5.0a 5.0
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
