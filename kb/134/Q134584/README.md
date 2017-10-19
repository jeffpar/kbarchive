---
layout: page
title: "Q134584: Second PCMCIA Network Adapter Fails"
permalink: /kb/134/Q134584/
---

## Q134584: Second PCMCIA Network Adapter Fails

	Article: Q134584
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up Windows 95, Windows 95 will not install more than one PCMCIA
	network adapter correctly.
	
	CAUSE
	=====
	
	The Windows 95 32-bit socket drivers are not enabled.
	
	RESOLUTION
	==========
	
	Install the Windows 95 32-Bit PCMCIA Socket drivers. To do so, follow these
	steps:
	
	1. Double-click My Computer.
	
	2. Double-click Control Panel.
	
	3. Start the 32-bit PC Card (PCMCIA) wizard, and follow the instructions on the
	  screen.
	
	MORE INFORMATION
	================
	
	Windows 95 setup preserves the 16 bit network configuration of PCMCIA devices.
	However the Windows95 network client only provides support for one 16 bit
	network. Because of this, only one PCMCIA network card will function correctly
	until 32 bit pcmcia support is unenabled. To enable 32 bit network support query
	on 'enable 32 bit PCMCIA'.
	
	
	NOTE: Microsoft Windows 95 is specifically designed to detect and install only
	one PCMCIA network card during setup. While it is possible to install multiple
	PCMCIA network cards during setup manually, following the steps above ensures
	the adapter works properly.
	
	The third-party product discussed here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: socket services
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork win95 
	Technology        : kbWin95search kbZNotKeyword3
	Issue type        : kbprb
	
	=============================================================================
	
