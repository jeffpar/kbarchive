---
layout: page
title: "Q148179: Digi ISDN Adapter Stops Working During 128K Connection"
permalink: kb/148/Q148179/
---

## Q148179: Digi ISDN Adapter Stops Working During 128K Connection

	Article: Q148179
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
	
	When you are running the ISDN Accelerator Pack for Microsoft Internet Explorer
	2.0 with a Digi Datafire or PCIMAC ISDN adapter, the adapter may stop working
	while you are connecting to a server, while you are copying files, or within
	five minutes of connecting.
	
	CAUSE
	=====
	
	Digi ISDN adapters running at 128K do not connect reliably with servers using
	other manufacturers' adapters.
	
	RESOLUTION
	==========
	
	To work around this problem, change the connection speed from 128K to 64K by
	performing the following steps:
	
	1. In My Computer, double-click Dial-Up Networking.
	
	2. Use the right mouse button to click the connection, and then click Properties
	  on the menu that appears.
	
	3. Click Configure.
	
	4. In the Speed Preference box, click 64K.
	
	Additional query words: ndis wan
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
