---
layout: page
title: "Q125322: Slow Data Throughput Using CSNW or GSNW"
permalink: /kb/125/Q125322/
---

## Q125322: Slow Data Throughput Using CSNW or GSNW

	Article: Q125322
	Product(s): Microsoft Windows NT
	Version(s): 3.5 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 4.0 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the Client Services for NetWare (CSNW) or Gateway Services for
	NetWare (GSNW), you may experience slow performance and data throughput if
	multiple frame types are enabled on NetWare servers.
	
	CAUSE
	=====
	
	Since a NetWare server can act as a router or translator, converting one frame
	type to another, if a Windows NT computer is configured with a frame type that
	is different from other client computers on the network, all network traffic
	will pass through the NetWare server. The performance degradation can be
	significant if the NetWare server is connected with a slow link.
	
	RESOLUTION
	==========
	
	1. Verify the correct frame type is being used for the NWLink IPX/SPX Compatible
	  Transport (the same frame type used by the NetWare server).
	
	2. Verify the protocol above is binding to the correct network adapter (if more
	  than one network card is used on the computer).
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
