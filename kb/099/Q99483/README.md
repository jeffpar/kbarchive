---
layout: page
title: "Q99483: Identical Cards on Server Cause SYS0052 Duplicate Name"
permalink: kb/099/Q99483/
---

## Q99483: Identical Cards on Server Cause SYS0052 Duplicate Name

	Article: Q99483
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	If you configure two identical network cards (for example, 3Com EtherLink II/TP
	cards) on a server and try to run NetBEUI and XNS on each, starting the
	workstation service results in a SYS0052 error message: a duplicate name exists
	on the network. Bind one protocol on each card to resolve the conflict.
	
	MORE INFORMATION
	================
	
	The error is expected behavior. When the second card attempts to register its
	NetBIOS names, they conflict with the names registered on the first card. Under
	NetBIOS, each card in a logical network must be registered with a unique name.
	
	NetBEUI and XNS represent different logical networks, and you cannot bind the
	same protocol to two cards attached to the same physical network or to networks
	that are bridged together.
	
	Bind one protocol to each card (for example, XNS on the first, and NetBEUI on the
	second) to resolve the conflict.
	
	Additional query words: 2.00 2.0 2.10 2.1 2.10a 2.1a 2.20 2.2
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
