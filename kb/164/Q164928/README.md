---
layout: page
title: "Q164928: Not All Objects Are Displayed When Browsing NDS Trees"
permalink: kb/164/Q164928/
---

## Q164928: Not All Objects Are Displayed When Browsing NDS Trees

	Article: Q164928
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Client Services for NetWare (CSNW) or Gateway Services for
	NetWare (GSNW) to browse a NetWare Directory Services (NDS) tree, some NDS
	objects may be missing from the list of available objects.
	
	CAUSE
	=====
	
	The Microsoft client software does not correctly handle cases where the NDS tree
	is very large. If the data requested by the client is not entirely contained by
	the first reply from a NetWare server, some NDS objects may be omitted from the
	list displayed by the Windows NT-based client. This may prevent users from
	seeing servers or printers that ought to show up in browse lists.
	
	This problem does not prevent users from connecting to NDS resources that exist;
	it only prevents some of the resources from being displayed when browsing for
	network resources.
	
	WORKAROUND
	==========
	
	If possible, keep the size of the NDS tree to a minimum. Alternatively obtain
	the hotfix mentioned below or update to the service pack containing this fix
	when it is available.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt print queues volume printer
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
