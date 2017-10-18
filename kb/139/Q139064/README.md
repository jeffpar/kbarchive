---
layout: page
title: "Q139064: Madge Token Ring Card Does Not Automatically Sense Ring Speed"
permalink: kb/139/Q139064/
---

## Q139064: Madge Token Ring Card Does Not Automatically Sense Ring Speed

	Article: Q139064
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
	
	The Madge Token Ring network adapter in your computer may not work correctly.
	
	CAUSE
	=====
	
	The ring speed setting for the network adapter may not match the Windows 95
	settings. The Madge Token Ring network adapter does not automatically sense the
	network's ring speed. The Windows 95 network driver defaults to a ring speed of
	4 Mbps.
	
	RESOLUTION
	==========
	
	Use the manufacturer-supplied Trspeed.exe tool to set the network adapter's ring
	speed. For information about the Trspeed.exe tool, please consult the network
	adapter's documentation or manufacturer.
	
	To set the ring speed for the network adapter in Windows 95, follow these steps:
	
	1. In Control Panel, double-click the Network icon.
	
	2. Click the Madge Token Ring adapter, and then click Properties.
	
	3. On the Advanced tab, click "Force XX Mbits/s" in the Property box, and then
	  click the Value box.
	
	  NOTE: If the token ring adapter is set to "Force16=ON" or "Force16=Yes," click
	  "Force 16 Mbits/s" in the Property box.
	
	4. In the Value box, click Yes.
	
	5. Click OK, and then restart your computer when you are prompted to do so.
	
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
