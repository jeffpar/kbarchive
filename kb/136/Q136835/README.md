---
layout: page
title: "Q136835: PCMCIA Hard Disk Not Available After Windows 95 Starts"
permalink: /kb/136/Q136835/
---

## Q136835: PCMCIA Hard Disk Not Available After Windows 95 Starts

	Article: Q136835
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
	
	When you start Windows 95 with a PCMCIA hard disk inserted in the computer's
	PCMCIA slot, the hard disk seems to be recognized, but may not be available in
	Windows 95.
	
	CAUSE
	=====
	
	This problem can occur if your computer does not have an IDE hard disk
	controller installed. If there is no IDE hard disk controller installed, the
	PCMCIA hard disk is assigned IDE port 1F0h. Because this port is normally
	associated with the primary hard disk controller, Windows 95 treats it
	differently from other IDE ports and does not assign it a drive letter.
	
	RESOLUTION
	==========
	
	Remove the PCMCIA hard disk after Windows 95 starts, and then insert it in the
	PCMCIA slot again.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: pc card
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
