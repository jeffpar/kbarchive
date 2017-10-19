---
layout: page
title: "Q76457: Colorado Tape Backup Boards FC10, TC15, and MS-DOS"
permalink: /kb/076/Q76457/
---

## Q76457: Colorado Tape Backup Boards FC10, TC15, and MS-DOS

	Article: Q76457
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Colorado Tape Backup Systems FC10 (8-bit) and TC15 (16-bit) internal tape cards
	may conflict with EMM386.EXE. Symptoms include intermittent memory conflicts,
	system hangs when EMM386.EXE attempts to install, and the inability to access
	upper memory blocks (UMBs).
	
	MORE INFORMATION
	================
	
	The FC10 and TC15 tape backup cards come with an installation program that
	automatically assigns an open hardware interrupt (IRQ) and memory address. The
	selected memory address may conflict with EMM386.EXE.
	
	To work around this possible conflict, try one of the following:
	
	- Manually change the address through the tape backup card installation
	  software.
	
	-or-
	
	- Exclude the appropriate memory address on the EMM386.EXE line. For example:
	
	  device=c:\dos\emm386.exe x=d000-dfff
	
	For more information, contact Colorado Systems at (800) 845-7906.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 6.22 5.00 5.00a 6.00 3rdparty 6.2 lock up
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
