---
layout: page
title: "Q136014: PCMCIA Card Does Not Work After Running PCMCIA Wizard"
permalink: kb/136/Q136014/
---

## Q136014: PCMCIA Card Does Not Work After Running PCMCIA Wizard

	Article: Q136014
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
	
	After you run the PC Card (PCMCIA) Wizard to install protected-mode socket
	services for a PCMCIA card, you are instructed to shut down Windows 95 and then
	turn your computer off and back on. If you restart your computer by pressing
	CTRL+ALT+DEL, instead of turning the computer off and back on, you may receive
	an error message stating that the PCMCIA drivers are not working correctly.
	
	CAUSE
	=====
	
	The protected-mode drivers for the PCMCIA controller may not initialize
	correctly when you restart your computer by pressing CTRL+ALT+DEL because the
	real-mode drivers still have control of the device.
	
	RESOLUTION
	==========
	
	Shut down Windows 95 and then turn your computer off and back on.
	
	MORE INFORMATION
	================
	
	The real-mode drivers may remain in memory after a "soft" reset. You must turn
	the computer off and back on to completely remove the real-mode drivers from
	memory.
	
	This issue is known to affect Databook controllers.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	REFERENCES
	==========
	
	Microsoft Windows 95 "Resource Kit," pages 614-617
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
