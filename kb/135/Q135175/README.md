---
layout: page
title: "Q135175: Cannot Use Two Xircom PCMCIA Network Cards at Once"
permalink: kb/135/Q135175/
---

## Q135175: Cannot Use Two Xircom PCMCIA Network Cards at Once

	Article: Q135175
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
	
	If you start Windows 95 with one Xircom PCMCIA network card inserted in the
	computer, the card works correctly until you insert a second Xircom PCMCIA
	network card. When you insert the second card, the second card works correctly
	and the first stops working. If you remove and reinsert the first card, it works
	correctly and the second card stops working.
	
	CAUSE
	=====
	
	This problem occurs because both cards have the same PCMCIA ID but different
	checksums. The cards both appear to be the same card to Windows 95, so Windows
	95 switches system resources from one card to the other.
	
	RESOLUTION
	==========
	
	If you must run two network cards at the same time, they cannot both be Xircom
	network cards.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
