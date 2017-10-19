---
layout: page
title: "Q134601: DEC 24x4x Chip Set on Network Adapter Not Detected Correctly"
permalink: /kb/134/Q134601/
---

## Q134601: DEC 24x4x Chip Set on Network Adapter Not Detected Correctly

	Article: Q134601
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
	
	When you are using a network adapter with a DEC 24x4x chip set, the network
	adapter seems to install correctly, but it does not communicate with the
	network. If you use the NET USE command at an MS-DOS prompt, you receive the
	following error message:
	
	  Error 51: The computername specified is not receiving requests.
	
	CAUSE
	=====
	
	The Transceiver Type setting for the network adapter is automatically set to
	Autodetect with this chip set.
	
	RESOLUTION
	==========
	
	Change the Transceiver Type setting to the appropriate setting for the network
	adapter. To do so, follow these steps:
	
	1. Use the right mouse button to click Network Neighborhood, and then click
	  Properties on the menu that appears.
	
	2. Click the network adapter, and then click Properties.
	
	3. On the Advanced tab, change the Transceiver Type setting to the correct
	  value.
	
	4. Click OK.
	
	STATUS
	======
	
	This situation is most likely caused by design changes in Windows 95. Microsoft
	has confirmed that it is not caused by a problem in Windows 95. For more
	information about resolving this issue, contact DEC.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbZNotKeyword3
	
	=============================================================================
	
