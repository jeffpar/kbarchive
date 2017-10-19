---
layout: page
title: "Q164308: Windows NT 4.0 Clients May Refresh WINS Entries Frequently"
permalink: /kb/164/Q164308/
---

## Q164308: Windows NT 4.0 Clients May Refresh WINS Entries Frequently

	Article: Q164308
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Windows NT 4.0 computers that have Remote Access Service (RAS) installed or are
	multihomed may refresh their names with a WINS server every 10 minutes, instead
	of using the time-to-live (TTL) value returned by the WINS server.
	
	This name refreshing may cause overloaded WINS servers that do not respond
	quickly to name registration or name refresh attempts.
	
	CAUSE
	=====
	
	When a computer that is already on a network has RAS installed, it becomes a
	multihomed system. Typing "ipconfig /all" (without the quote marks) will show
	ndiswan adapters present, in addition to the network adapter.
	
	At startup, WINS clients register their NetBIOS names with their assigned WINS
	servers. This is done on all adapters that are present. If the name registration
	fails on any adapter, the name is marked (in memory) as still needing to be
	registered.
	
	Every ten minutes, a name refresh routine is run. It checks the list of names
	and, if any of them were not successfully registered, the name is refreshed on
	ALL adapters. If the RAS link is not active, the failure to register on it will
	cause the name(s) to be refreshed every 10 minutes on the LAN adapter(s) as
	well, which can overload WINS servers.
	
	RESOLUTION
	==========
	
	A new version of Netbt.sys has been created that no longer exhibits this
	problem. It will only attempt to refresh the name on the adapter that
	registration failed on in the first place. The other adapter will send a name
	refresh at half of the TTL indicated in the registration response.
	
	NOTE: Even with this new version of Netbt.sys, if a multihomed computer receives
	name registration responses that contain different TTL values (on different
	adapters), the lowest TTL value will be used to determine the refresh interval.
	For instance, if adapter "A" receives a name registration response with a TTL of
	43,200 (12 hours) and adapter "B" receives a name registration response with a
	TTL of 86,400 (24 hours), a refresh will be sent for the name(s) at half of
	43,200, or 6 hours, on each adapter.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.51 and
	4.0. This problem was corrected in the latest U.S. Service Pack for Windows NT
	and Windows NT Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: multi-homed
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	
