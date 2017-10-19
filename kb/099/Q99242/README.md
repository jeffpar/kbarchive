---
layout: page
title: "Q99242: Gateway 2000 Hangs When Using BRIEF with MS-DOS 5.0 or later"
permalink: /kb/099/Q99242/
---

## Q99242: Gateway 2000 Hangs When Using BRIEF with MS-DOS 5.0 or later

	Article: Q99242
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
	
	You may receive the following error message if you use BRIEF with MS-DOS 6.2 on
	some Gateway 2000 486 machines:
	
	  divide by zero
	
	After BRIEF closes, your computer is left at the MS-DOS command prompt. The next
	command you issue may cause your system to stop responding (hang).
	
	This problem commonly occurs after you press the NUMLOCK key twice. In addition,
	if you run BRIEF, exit BRIEF, and then run MS-DOS Editor, pressing the NUMLOCK
	key may cause the system to hang. If the system does not hang, you may be unable
	to access drive A or B.
	
	CAUSE
	=====
	
	This problem may occur due to the way BRIEF initializes memory. For more
	information, contact Borland Technical Support or contact Gateway 2000 Technical
	Support.
	
	RESOLUTION
	==========
	
	According to an article in PC Week, a new BIOS is available from Gateway that
	corrects this problem.
	
	BRIEF is a text editor designed for programmers. BRIEF is manufactured by
	Borland, a vendor independent of Microsoft; we make no warranty, implied or
	otherwise regarding this product's performance or reliability.
	
	
	Additional query words: 6.22 6.00 6.20 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.0,5.0a,6.0,6.2,6.21,6.22
	
	=============================================================================
	
