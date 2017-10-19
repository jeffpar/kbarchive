---
layout: page
title: "Q129111: PCI Adapter Incorrectly Identified on Dual-bus Computers"
permalink: /kb/129/Q129111/
---

## Q129111: PCI Adapter Incorrectly Identified on Dual-bus Computers

	Article: Q129111
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Some adapters on the second bus of a dual-bus PCI computer are not correctly
	detected, causing the driver to fail to load.
	
	CAUSE
	=====
	
	On systems with dual PCI buses, Windows NT 3.5 incorrectly reports that all
	adapters on the second PCI bus (bus 1) are memory-mapped. An I/O-mapped adapter
	that is installed on the second bus will be incorrectly identified as
	memory-mapped. I/O-mapped adapters are correctly identified when installed on
	PCI bus 0.
	
	
	STATUS
	------
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	S E R V P A C K
	
	Additional query words: 3.50 prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
