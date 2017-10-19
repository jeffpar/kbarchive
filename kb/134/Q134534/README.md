---
layout: page
title: "Q134534: Mouse Pointer Is Jerky and Multimedia Sound Stutters"
permalink: /kb/134/Q134534/
---

## Q134534: Mouse Pointer Is Jerky and Multimedia Sound Stutters

	Article: Q134534
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a computer terminates a Direct Cable Connection connection using a
	parallel cable, the mouse pointer does not move smoothly and multimedia sound
	"stutters" for about 30 seconds.
	
	CAUSE
	=====
	
	The parallel driver (Paralink.vxd) may not sense that the other system has
	dropped the connection. During the first 30 seconds, it tries periodically to
	detect whether the other system is still active. Each time it tries to detect
	the other system, the parallel driver turns off the interrupt that prevents
	other hardware interrupts from being serviced.
	
	RESOLUTION
	==========
	
	Wait approximately 30 seconds. The parallel driver will realize the connection
	has been terminated and the system will operate normally.
	
	Additional query words: dcc
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
