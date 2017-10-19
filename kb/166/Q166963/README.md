---
layout: page
title: "Q166963: Cannot Communicate with Computer Running NWLink IPX/SPX"
permalink: /kb/166/Q166963/
---

## Q166963: Cannot Communicate with Computer Running NWLink IPX/SPX

	Article: Q166963
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist kbfixlist
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you try to connect from a Windows NT 4.0 server to another Windows NT 4.0
	server using the NWLink IPX/SPX protocol, you may receive an error message such
	as:
	
	  Network path not found
	
	CAUSE
	=====
	
	Switching from the Auto Detect frame type to a manual frame type setting and
	adding more than one frame type in the properties for the NWLink IPX/SPX
	protocol can cause a loss of connectivity.
	
	NOTE: The option to add multiple frame types is available only on Windows NT
	Server-based computers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: network path not found error 53
	
	======================================================================
	Keywords          : kbnetwork kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
