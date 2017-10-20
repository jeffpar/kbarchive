---
layout: page
title: "Q163725: NDIS Driver Fails To Check Functional Address"
permalink: /kb/163/Q163725/
---

## Q163725: NDIS Driver Fails To Check Functional Address

{% raw %}

	Article: Q163725
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	On a computer running Windows NT and using Token Ring network cards, packets
	that are addressed to certain functional addresses may be dropped, indicating a
	failure in the NDIS (network driver interface specification) driver.
	
	CAUSE
	=====
	
	The NDIS driver fails to check for combined functional addresses in order to
	find a matching address to the destination functional address of the incoming
	packet. A combined functional address is the logical OR of multiple functional
	addresses that the token ring network card listens to.
	
	RESOLUTION
	==========
	
	The NDIS driver has been modified to check for combined functional addresses.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: ndis
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
