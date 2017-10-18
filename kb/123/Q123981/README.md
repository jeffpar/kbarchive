---
layout: page
title: "Q123981: Event IDs 4307 and 4311 Occur After Disabling WINS Bindings"
permalink: kb/123/Q123981/
---

## Q123981: Event IDs 4307 and 4311 Occur After Disabling WINS Bindings

	Article: Q123981
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you attempt to disable the WINS bindings for a network interface card
	(NIC) in the Control Panel Network dialog box, Event Viewer reports two errors:
	
	  Event ID 4307: Initialization failed because the transport refused to open
	  initial Addresses.
	
	  Event ID 4311: Initialization failed because the driver device could not be
	  created.
	
	CAUSE
	=====
	
	These errors occur when you disable all WINS related bindings and Show Binding
	For is set to < All Components >. They may also occur due to an incorrect
	order of the bindings.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. In the Show Bindings For list box, choose WINS Client(TCP/IP).
	
	2. Select the WINS binding shown and choose Enable.
	
	3. Verify that the WINS bindings are above any RAS bindings in the list (lower
	  all RAS bindings to the bottom of the list).
	
	4. Choose OK and then choose OK again.
	
	If enabling the bindings does not correct the problem, remove the TCP/IP protocol
	completely, and then reinstall it.
	
	Additional query words: adapter prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
