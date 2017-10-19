---
layout: page
title: "Q135189: Err Msg: Your Network Adapter HP27252 Is Not Configured..."
permalink: /kb/135/Q135189/
---

## Q135189: Err Msg: Your Network Adapter HP27252 Is Not Configured...

	Article: Q135189
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
	
	When you start Windows 95, you may receive the following error message:
	
	  Your network adapter HP27252 is not configured correctly. You may need to set
	  it up again.
	
	If you click OK, Windows 95 starts normally and the network functions correctly.
	
	CAUSE
	=====
	
	This error message can occur if you are using a Hewlett-Packard HP27252 ISA
	Ethernet network adapter with NDIS3 drivers.
	
	RESOLUTION
	==========
	
	You can safely ignore the error message.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The HP27252 ISA network adapter comes factory-configured to use automatic
	detection for the media type. To use NDIS2 drivers with this adapter when you
	are using the AUI media type, set the "AUI instead of TP?" setting to Yes.
	
	Additional query words:
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
