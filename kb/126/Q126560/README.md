---
layout: page
title: "Q126560: Cannot Create NetBIOS Session Over TCP/IP"
permalink: /kb/126/Q126560/
---

## Q126560: Cannot Create NetBIOS Session Over TCP/IP

	Article: Q126560
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run NET VIEW or NET USE, you may receive the following error message:
	
	  System error 1225 has occurred. The remote system refused the network
	  connection.
	
	A trace of network activity shows repeated pairs of the following messages:
	
	  workstation->server: SYN
	  server->workstation: ACK, RST
	
	The following STOP message may also appear:
	
	  STOP 0xc000000A
	
	This problem occurs on servers with very heavy NetBIOS traffic over TCP/IP.
	
	CAUSE
	=====
	
	When netbt receives a zero length message, it fails to update the number of
	bytes left in the transport. As a result, when the connection is later
	disconnected, it never receives disconnect indication from the transport,
	leaving the connection unusable. After all connections are exhausted, new
	connections are not accepted.
	
	STATUS
	======
	
	NETBT.SYS has been modified so that it correctly handles 0 length messages.
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 prodnt trap blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	
