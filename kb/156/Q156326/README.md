---
layout: page
title: "Q156326: No Network Access with DEC Network Adapter"
permalink: kb/156/Q156326/
---

## Q156326: No Network Access with DEC Network Adapter

	Article: Q156326
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbnetwork kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a DEC PCI Ethernet DECchip 21041 network adapter, you may not
	be able to browse or connect to resources on the network, even though you have
	received no error messages.
	
	CAUSE
	=====
	
	This problem can occur if the network adapter is set to use the 10Base5 (AUI)
	connection type.
	
	
	RESOLUTION
	==========
	
	To resolve this issue, change the connection type to the default AutoSense
	setting. To do so, follow these steps:
	
	1. In Control Panel, double-click Network.
	
	2. Click Adapters, click the DEC PCI Ethernet DECChip 21041 adapter, and then
	  click Properties.
	
	3. In the Connection Type box, click AutoSense.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	4.0. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Other network adapters that may be affected by this issue include:
	
	- DEC DE435 EtherWORKS Turbo PCI adapter
	
	- DEC DE450 EtherWORKS Turbo PCI adapter
	
	- DEC multia's Ethernet controller
	
	- DEC PCI Ethernet DECchip 21040
	
	- DEC PCI Fast Ethernet DECchip 21142
	
	
	Additional query words: prodnt digital equipment corporation
	
	======================================================================
	Keywords          : kbhw kbnetwork kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
