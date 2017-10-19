---
layout: page
title: "Q177357: DHCP Client Does Not Immediately Renew Address"
permalink: /kb/177/Q177357/
---

## Q177357: DHCP Client Does Not Immediately Renew Address

	Article: Q177357
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Dynamic host configuration protocol (DHCP) clients may lose their IP address
	information for up to five minutes after their DHCP lease has expired.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows NT 4.0. For
	additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q152734 How to Obtain the Latest Windows NT 4.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following is a small section of RFC 1541 that governs lease expiration
	behavior:
	
	4.4.4 Reacquisition and expiration ...
	
	  In both RENEWING and REBINDING state, if the client receives no
	  response to its DHCPREQUEST message, the client should wait one-half
	  the remaining time until the expiration of T1 (in RENEWING state) and
	  T2 (in REBINDING state) down to a minimum of 60 seconds, before
	  retransmitting the DHCPREQUEST message.
	
	  If the lease expires before the client receives a DHCPACK, the client
	  moves to INIT state, MUST immediately stop any other network
	  processing and requests network initialization parameters as if the
	  client were uninitialized. If the client then receives a DHCPACK
	  allocating that client its previous network address, the client SHOULD
	  continue network processing. If the client is given a new network
	  address, it MUST NOT continue using the previous network address and
	  SHOULD notify the local users of the problem.
	
	Additional query words: request comments
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
