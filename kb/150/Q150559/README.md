---
layout: page
title: "Q150559: New Windows NT TCP/IP Registry Parameter: ArpTRSingleRoute"
permalink: /kb/150/Q150559/
---

## Q150559: New Windows NT TCP/IP Registry Parameter: ArpTRSingleRoute

	Article: Q150559
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 14-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	A new, configurable TCP/IP parameter has been added to the Windows NT Registry.
	In order to use the new parameter, you must obtain a new Tcpip.sys driver. This
	driver will be released in Service Pack 5, but can be obtained in the meantime
	by contacting Microsoft Product Support.
	
	The parameter is described below:
	
	  ArpTRSingleRoute
	  Key: Tcpip\Parameters
	  Value Type: REG_DWORD - Boolean
	  Valid Range: 0,1 (False or True)
	  Default: 0 (False)
	  Description: Setting this parameter to 1 causes ARP broadcasts that are
	  source-routed (Token Ring) to be sent as single-route broadcasts instead
	  of all-routes broadcasts.
	
	MORE INFORMATION
	================
	
	In a Token Ring network, when an all-routes broadcast is sent, a copy of the
	broadcast will be delivered to each of the other rings by each available path.
	This will generally result in multiple copies being delivered to a given ring. A
	system responding to the broadcast will respond to each of the packets it
	receives, and the routing information added to each response will cause it to
	follow the same route back to the original broadcaster, who will receive
	multiple responses, each via a different route. The broadcaster is then free to
	choose which route to use for future communications. Most implementations choose
	the first response.
	
	When a single-route broadcast is sent, the source routing bridges will only
	deliver one copy of the broadcast to each of the other rings. The broadcaster
	will only receive a single response, and it will use the route contained in the
	response for future communications.
	
	ARP is the protocol used by TCP/IP to map an IP address to a hardware address.
	
	By default, Windows NT TCP/IP tries ARPs in the following sequence when
	attempting to locate an IP address on a Token Ring network:
	
	1. Broadcast ARP, not source routed.
	
	2. Broadcast ARP, source-routed, all routes.
	
	3. Broadcast ARP, not source routed.
	
	4. Broadcast ARP, source-routed, all routes.
	
	Adding the ArpTRSingleRoute Registry parameter and setting it to "1" will cause
	the second and fourth ARPs to be single-route broadcasts, instead of all-routes
	broadcasts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
