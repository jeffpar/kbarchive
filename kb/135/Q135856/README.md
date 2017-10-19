---
layout: page
title: "Q135856: RIP Table Does Not Update When New RIPX Response Is Received"
permalink: /kb/135/Q135856/
---

## Q135856: RIP Table Does Not Update When New RIPX Response Is Received

	Article: Q135856
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Windows NT 3.51 sends "Routing Information Protocol over IPX" (RIPX) updates to
	routers but the routers fail to update the Routing Information Protocol (RIP)
	table. If a router receives a RIPX response for a network with a hop (tick)
	count, and then receives another RIPX response with a new hop (tick) count, it
	should update the routing table with this information.
	
	NOTE: You need to have Remote Access Service (RAS) installed with NWLink in order
	to send or receive RIPX packets from Windows NT 3.51.
	
	
	RESOLUTION
	==========
	
	To correct this problem, upgrade to Windows NT 3.51 (if you have not already
	done so) and install the latest U.S. Service Pack for Windows NT version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.51. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
