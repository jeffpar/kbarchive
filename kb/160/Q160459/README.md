---
layout: page
title: "Q160459: DNS Delegations May Fail"
permalink: /kb/160/Q160459/
---

## Q160459: DNS Delegations May Fail

	Article: Q160459
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Your Domain Name System (DNS) domain delegations fail and names from the
	delegated domains are no longer resolved.
	
	CAUSE
	=====
	
	Glue records may disappear.
	
	
	MORE INFORMATION
	================
	
	Glue records are records that allow a DNS to find another DNS that has been
	designated as authoritative for a particular domain.
	
	For instance, if you want to delegate authority for the ESS domain in the
	MICROSOFT.COM zone to a computer called mydnsserver, you would create the
	following records:
	
	   ess      IN NS mydnsserver.ess.microsoft.com.
	   mydnsserver.ess.microsoft.com.   IN A  w.x.y.z
	
	where w.x.y.z is the IP address for mydnsserver.
	
	The glue record is the "A" record. Glue records are not technically part of the
	zone's authority. Cached data also is not part of a zone's authority. Cached
	data eventually expires and gets deleted out of memory. Glue data may also
	inadvertently get deleted with the cached data.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
