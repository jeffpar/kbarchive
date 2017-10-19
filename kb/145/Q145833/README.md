---
layout: page
title: "Q145833: No Network Access with 3Com EtherLink 16 and NetBEUI Only"
permalink: /kb/145/Q145833/
---

## Q145833: No Network Access with 3Com EtherLink 16 and NetBEUI Only

	Article: Q145833
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
	
	When you are using a 3Com EtherLink 16 (3C507) network adapter with only the
	NetBEUI network protocol installed, you may be unable to browse or connect to
	shared network resources. If you install a second network protocol, you may
	still be unable to browse or connect to network resources shared on computers
	running only the NetBEUI protocol.
	
	CAUSE
	=====
	
	This is a known problem when you use a 3Com EtherLink 16 network adapter with
	only the NetBEUI network protocol installed.
	
	RESOLUTION
	==========
	
	To work around this problem, use the real-mode drivers for the 3Com EtherLink 16
	network adapter. To do so, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click the 3Com EtherLink 16 (3C507) adapter, and then click Properties.
	
	3. Click Real Mode (16-Bit) NDIS Driver, and then click OK.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
