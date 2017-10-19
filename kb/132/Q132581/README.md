---
layout: page
title: "Q132581: No Sound Playing Freddy Pharkas in MS-DOS Session"
permalink: /kb/132/Q132581/
---

## Q132581: No Sound Playing Freddy Pharkas in MS-DOS Session

	Article: Q132581
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are playing the game Freddy Pharkas in an MS-DOS session in Windows 95
	on a computer with Microsoft Windows Sound System-compatible hardware, the game
	may not produce any digital audio.
	
	CAUSE
	=====
	
	The game tries to reconfigure the audio hardware to use IRQ 7 and DMA 1. To
	maintain system stability, the device driver prevents this reconfiguration.
	
	RESOLUTION
	==========
	
	To play digital audio, use either of the following methods:
	
	- Reconfigure the Windows Sound System-compatible device to use IRQ 7 and DMA
	  1.
	
	- Create a shortcut to the game that specifies MS-DOS mode.
	
	MORE INFORMATION
	================
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
