---
layout: page
title: "Q135721: No InfoMover NE4100 PCMCIA Adapter Choice in Control Panel"
permalink: /kb/135/Q135721/
---

## Q135721: No InfoMover NE4100 PCMCIA Adapter Choice in Control Panel

	Article: Q135721
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Control Panel, choose Network, and then choose Add Adapter to
	install the driver for the National InfoMover NE4100 PCMCIA Ethernet Adapter,
	the adapter name does not appear on the list of installable network adapters
	even though it is on the Windows NT 3.51 Hardware Compatibility List (HCL).
	
	CAUSE
	=====
	
	This adapter is not listed in Control Panel because it is identical to the IBM
	PCMCIA Ethernet Adapter II and, therefore, is supported by the "IBM PCMCIA
	Ethernet and Compatible Adapter" driver.
	
	RESOLUTION
	==========
	
	Select the "IBM PCMCIA Ethernet and Compatible Adapter" from the list of
	installable adapters.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	
	=============================================================================
	
