---
layout: page
title: "Q132293: Windows 95 Hangs with Two PCMCIA Network Adapters"
permalink: /kb/132/Q132293/
---

## Q132293: Windows 95 Hangs with Two PCMCIA Network Adapters

{% raw %}

	Article: Q132293
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
	
	When you are using Windows 95 on a computer with a DATABOOk PCMCIA controller
	and two network adapters installed, Windows 95 may stop responding (hang) when
	you start the computer or "hot swap" the network adapters.
	
	CAUSE
	=====
	
	The DATABOOK PCMCIA controller does not handle bus contention on its card slots
	properly when two network adapters are installed and network traffic is high.
	
	
	RESOLUTION
	==========
	
	The first network adapter's lites must go out to enumerate the second device off
	the controller. This may not happen on a busy network. If the lites do not go
	out, remove the second apapter to prevent Windows 95 from hanging.
	
	NOTE: Do not unplug the cable, as you might not be able to re-establish the
	connection when you plug the cable back in.
	
	Contact DATABOOK for more information.
	
	MORE INFORMATION
	================
	
	According to DATABOOK, when you insert two network adapters into the PCMCIA
	slots, the first adapter is initialized by the controller and activated, but you
	cannot insert the second adapter until the first adapter's lights go out. On a
	busy network where the first adapter is constantly in use, the controller may
	hang when you insert the second adapter, causing Windows 95 to hang when you
	start Windows 95 or when you "hot swap" a network adapter.
	
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	

{% endraw %}
