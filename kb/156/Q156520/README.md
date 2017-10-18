---
layout: page
title: "Q156520: Logon Validation Fails Using Domain Name Server (DNS)"
permalink: kb/156/Q156520/
---

## Q156520: Logon Validation Fails Using Domain Name Server (DNS)

	Article: Q156520
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Domain Name System (DNS) as your primary name server, domain
	validation fails. You receive an informational dialog box stating that no domain
	controller could be found in the domain to validate your user account.
	
	CAUSE
	=====
	
	Microsoft Windows NT version 4.0 does not recognize any names other than the 0 x
	20 name for DNS name resolution requests. A Microsoft Windows NT client using
	DNS is not able to find a domain controller since the 0 x 1c Internet group name
	is required for domain validation.
	
	RESOLUTION
	==========
	
	Netbt.sys was modified to parse the NetBIOS Node Status response for the NetBIOS
	name requested, rather than just the 0 x 20 name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	In a DNS-only environment, Microsoft Windows NT sends a NetBIOS Node Status
	request to the IP address returned by the DNS server. When the client receives
	the NetBIOS Node Status response back, it parses all the registered NetBIOS
	names in the response to determine if the requested NetBIOS name is registered
	on the remote computer. If the requested name is registered on the remote
	computer, it adds the name and IP address to the remote hash table. Windows NT
	version 4.0 only looks for the 0 x 20 name in the NetBIOS Node Status response.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
