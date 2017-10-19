---
layout: page
title: "Q132772: IBM PCMCIA Token Ring Card Does Not Work on Omnibook 600"
permalink: /kb/132/Q132772/
---

## Q132772: IBM PCMCIA Token Ring Card Does Not Work on Omnibook 600

	Article: Q132772
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
	
	When you try to connect to a network using an IBM Token Ring PCMCIA network card
	on an Omnibook 600 computer, you are unable to view any resources.
	
	CAUSE
	=====
	
	There is a resource conflict between the Omnibook's proprietary PCMCIA
	controller and the IBM Token Ring PCMCIA network card. The Omnibook's
	proprietary PCMCIA controller supports IO ranges up to 0x3FF. The IBM Token Ring
	PCMCIA network card can only reside at IO A20.
	
	RESOLUTION
	==========
	
	At present, there is no resolution. The IBM Token Ring PCMCIA network card
	cannot be used on an Omnibook 600 computer.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: no network browse browsing error PC Card
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
