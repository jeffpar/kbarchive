---
layout: page
title: "Q150577: ARP Request for Nonlocal Target Hosts on Same Physical Net"
permalink: /kb/150/Q150577/
---

## Q150577: ARP Request for Nonlocal Target Hosts on Same Physical Net

{% raw %}

	Article: Q150577
	Product(s): Microsoft Windows NT
	Version(s): 3.11 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	- Microsoft TCP/IP-32 for Windows for Workgroups, versions 3.11, 3.11a, 3.11b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If multiple logical subnets are present on the same physical network (with no
	routers between the subnets), communication between hosts from different subnets
	might not be possible. The packets destined for nonlocal subnets will be sent to
	the router (if configured for one) or dropped (if no default gateway is
	present). The Address Resolution Protocol (ARP) is used by the host to find the
	physical address (MAC address) of a target host. An ARP request packet is
	broadcast on the local subnet if the target host subnet address matches the
	host's subnet address. If the subnet addresses do not match, then ARP resolves
	the MAC addresses for the router.
	
	MORE INFORMATION
	================
	
	The following information is extracted from a Microsoft whitepaper on TCP/IP.
	
	When running multiple logical subnets on the same physical network, the following
	command can be used to tell IP to treat all subnets as local and to use ARP
	directly for the destination:
	
	  route add 0.0.0.0 MASK 0.0.0.0 <my local ip address>
	
	Thus, packets destined for "non-local" subnets will be transmitted directly onto
	the local media instead of being sent to a router. In essence, the local
	interface card can be designated as the default gateway. This might be useful
	where several class "C" networks are being used on one physical network with no
	router to the outside world.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search kbAudDeveloper kbTCPIPSearch kbZNotKeyword3 kbTCPIP311 kbTCPIP311a kbTCPIP311b
	Version           : 3.11 3.50 3.51
	
	=============================================================================
	

{% endraw %}
