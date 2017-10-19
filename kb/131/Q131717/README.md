---
layout: page
title: "Q131717: Network Address Requires Trailing Zeros in NETWORKS File"
permalink: /kb/131/Q131717/
---

## Q131717: Network Address Requires Trailing Zeros in NETWORKS File

	Article: Q131717
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a network address includes trailing zeros and you do not add them in the
	NETWORKS file (located in the %SystemRoot%\SYSTEM32\DRIVERS\ETC directory), the
	ROUTE ADD command incorrectly adds the network address to the routing table. For
	example, if the following entry in your NETWORKS file:
	
	  testlab     11.11
	
	and you enter the command:
	
	  ROUTE ADD TESTLAB 11.11.94.1
	
	the network address of 0.0.11.11 is added to the routing table.
	
	WORKAROUND
	==========
	
	If a network address includes trailing zeros, make sure to include them in the
	NETWORKS file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.51 and 4.0. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt wfw tcpip ip etc unix drivers
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
