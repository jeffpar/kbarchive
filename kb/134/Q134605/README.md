---
layout: page
title: "Q134605: Doom 2 Loses IRQ Setting When Closed with CTRL+ALT+DELETE"
permalink: /kb/134/Q134605/
---

## Q134605: Doom 2 Loses IRQ Setting When Closed with CTRL+ALT+DELETE

	Article: Q134605
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
	
	When you press CTRL+ALT+DELETE and quit the Doom 2 program by clicking the End
	Task button in the Close Program dialog box, when you restart Doom 2, the sound
	effects are no longer present although the music may still play.
	
	CAUSE
	=====
	
	Ending the task rather than shutting down Doom 2 causes the program to change
	the Sound Blaster IRQ setting in the Doom 2 configuration file.
	
	RESOLUTION
	==========
	
	Do not use CTRL+ALT+DELETE to quit the Doom 2 program. If you do have to use
	CTRL+ALT+DELETE because of a problem, shut down Windows 95 and restart it so
	that the Sound Blaster IRQ setting are restored.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
