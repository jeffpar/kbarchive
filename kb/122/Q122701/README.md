---
layout: page
title: "Q122701: RAS Clients Select the Beginning Address in Static Pool"
permalink: kb/122/Q122701/
---

## Q122701: RAS Clients Select the Beginning Address in Static Pool

	Article: Q122701
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
	
	If a DHCP server is not available or if you do not want DHCP to assign remote
	TCP/IP client IP addresses, a range of IP addresses can be given to a Remote
	Access Service (RAS) server for assignment to clients, which is called the
	static address pool. After you select the "Allow remote clients to request a
	predetermined IP address" option in the RAS Server TCP/IP Configuration dialog
	box and the RAS client selects the beginning static address as its IP address,
	the RAS client is unable to PING the remote network including the RAS server.
	
	CAUSE
	=====
	
	This problem occurs when the RAS client requests the beginning IP address in the
	static address pool. This address is reserved for the RAS server's use and
	cannot be used by a RAS client.
	
	WORKAROUND
	==========
	
	To work around this problem, request another IP address in the static address
	pool other than the beginning IP address in the pool.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	
	Additional query words: point-to-point prodnt rasphone rasadmin
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTS350search
	Version           : 3.5 4.0
	
	=============================================================================
	
