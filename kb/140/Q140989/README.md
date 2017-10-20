---
layout: page
title: "Q140989: PRB: DHCP Skips Addresses If Exclusion Range Included in Scope"
permalink: /kb/140/Q140989/
---

## Q140989: PRB: DHCP Skips Addresses If Exclusion Range Included in Scope

{% raw %}

	Article: Q140989
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an exclusion range with DHCP, addresses offered to clients may not
	begin at the first address in the scope.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Leases offered to clients from a DHCP scope will be offered consecutively,
	starting with the first address in the IP address pool. But if an exclusion
	range is added to the scope, the first lease offered may not be the first
	address in the IP address pool.
	
	For example, if a scope is created using a starting address of 165.224.113.11 and
	an ending address of 165.224.113.249, the first lease address offered to clients
	will be 165.224.113.11.
	
	Alternatively, if an exclusion range of 165.224.113.100 to 165.224.113.120 is
	added to the scope, the first lease address offered will be 165.224.113.75.
	Leases will be offered consecutively through 165.224.113.249, skipping the
	excluded range. After 165.224.113.249, the next leases offered will be
	165.224.113.11 through 165.224.113.74 consecutively.
	
	This may also occur when multiple ranges of addresses are included in the DHCP
	scope.
	
	Additional query words: prodnt tcpip
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
