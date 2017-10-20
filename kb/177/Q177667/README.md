---
layout: page
title: "Q177667: Unable to Transfer Large Files with NICs Using DEC-chipset"
permalink: /kb/177/Q177667/
---

## Q177667: Unable to Transfer Large Files with NICs Using DEC-chipset

{% raw %}

	Article: Q177667
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	It has been observed in several cases that on very fast computers (for example,
	Digital Equipment AlphaServer 1000 5 /333 or AlphaServer 1000 5 /333), there are
	problems transferring larger files if network adapters with DEC-Chipset (for
	example, Digital Equipment DE435 PCI Ethernet Adapter or DE450-CA Etherworks
	Turbo) are used.
	
	CAUSE
	=====
	
	This is because of a large amount of collisions occurring during file transfers.
	In general, the problem is protocol independent but will most likely be observed
	in TCP/IP environments. The problem may also happen on Intel-based computers.
	
	RESOLUTION
	==========
	
	Download the most recent drivers V2.60 or higher, from Digital's Web site.
	
	
	Additional query words: dec digital 21040 DE425 DE434 DE435 21041
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
