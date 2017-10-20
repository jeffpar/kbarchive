---
layout: page
title: "Q149878: Protocol Does Not Bind to Token Ring Network Card"
permalink: /kb/149/Q149878/
---

## Q149878: Protocol Does Not Bind to Token Ring Network Card

{% raw %}

	Article: Q149878
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Token Ring congestion and/or error messages may prevent network protocols from
	binding correctly to a Token Ring network card. There have been situations where
	TCP/IP failed to bind and NetBEUI succeeded to bind.
	
	This article explains why one or more protocols do not bind to the network card.
	
	MORE INFORMATION
	================
	
	After initializing, the adapter is opened for ring communication by a
	DIR.OPEN.ADAPTER command. This command is issued by every protocol. If a 0x00
	return code (success) is received, the adapter is in automatic receive mode and
	frames may be transmitted and received using the direct interface.
	
	However, under certain circumstances DIR.OPEN.ADAPTER (NdisOpenAdapter in NDIS
	source code) returns NDIS_STATUS_OPEN_FAILED with Adapter Open Error 59 which
	means the adapter detected that a ring parameter server is present on the ring,
	but that the required response has not been received in the allotted time. This
	indicates that the ring might be congested, experiencing a high bit-error rate,
	or losing an abnormally high number of tokens or frames (IBM LAN Technical
	Reference, page B-57.)
	
	Because an error is returned, the protocol does not bind to the network card. The
	physical network should be investigated.
	
	
	Additional query words: 4.00 prodnt ipconfig
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
