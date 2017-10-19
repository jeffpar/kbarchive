---
layout: page
title: "Q119430: Pentium with Intel Motherboard Hangs When Running MemMaker"
permalink: /kb/119/Q119430/
---

## Q119430: Pentium with Intel Motherboard Hangs When Running MemMaker

	Article: Q119430
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run MemMaker on certain computers using Intel motherboards and the
	Pentium processor, the system stops responding (hangs) after rebooting.
	
	On some Pentium computers, when you are prompted to press ENTER, the computer
	boots, returns to the MemMaker screen and hangs. If you press the reset button,
	the computer boots and MemMaker proceeds to the next phase. When you press ENTER
	again, the computer boots, returns to the MemMaker screen and hangs again.
	Pressing the reset button reboots the computer and MemMaker again proceeds to
	the next phase. This process continues until MemMaker is finished optimizing
	your system.
	
	This problem is known to occur on some Gateway 2000 computers and clones.
	
	CAUSE
	=====
	
	Intel has confirmed that this problem is caused by a BIOS problem with some
	boards.
	
	RESOLUTION
	==========
	
	Contact your computer reseller for a replacement BIOS chip set. (This is a Flash
	BIOS ROM and can be reprogrammed from a disk.)
	
	MORE INFORMATION
	================
	
	Normally, when MemMaker is run, it prompts you to press ENTER to reset the
	computer after each phase of operation. After resetting, MemMaker continues to
	the next phase until the operation is completed. If MemMaker does not complete
	because a program (such as a menu or batch file) is launched or the computer is
	reset or turned off, the next time the computer is turned on, a message is
	displayed advising that MemMaker did not complete.
	
	
	Additional query words: 6.00 6.20 locks 6.x dos pci
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
