---
layout: page
title: "Q171465: CardBus PC Card Socket Unsupported in Windows NT 4.0"
permalink: /kb/171/Q171465/
---

## Q171465: CardBus PC Card Socket Unsupported in Windows NT 4.0

{% raw %}

	Article: Q171465
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you double-click the PCMCIA icon in Control Panel, you may receive the
	following error message:
	
	  No PCMCIA controller found
	
	CAUSE
	=====
	
	The PCMCIA controller in your computer is operating in CardBus mode.
	
	RESOLUTION
	==========
	
	To resolve this issue, configure your computer's PC Card to operate in PCIC
	mode. For assistance with configuring your PC Card controller, contact your
	hardware's manufacturer.
	
	
	MORE INFORMATION
	================
	
	The CardBus standard is a PC Card controller standard that implements a 32-bit
	architecture and allows operation at speeds up to 33 MHz. This standard requires
	drivers beyond the scope of the PC Card 2.1 specification that Windows NT
	supports.
	
	
	Additional query words: card bus card-bus pccard
	
	======================================================================
	Keywords          : kbenv kberrmsg 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
