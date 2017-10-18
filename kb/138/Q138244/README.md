---
layout: page
title: "Q138244: Printing Fails with &quot;RPC Procedure Call Failed&quot;"
permalink: kb/138/Q138244/
---

## Q138244: Printing Fails with &quot;RPC Procedure Call Failed&quot;

	Article: Q138244
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork kbprint kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	"RPC procedure call failed" error messages accompany the inability to connect to
	remote printers or to spool print jobs. Other operations besides printing may
	also generate similar RPC-related errors and may be symptoms of the same
	problem.
	
	CAUSE
	=====
	
	When a multithreaded client is making RPC calls to a server, and the server is
	rebooted or the network session with the server is otherwise lost, the client
	does not reset the associations to the server when the connection is
	reestablished. Thus the problem described here is not likely to be seen in an
	environment where network connections are highly reliable.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork kbprint kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Solution Type     : kbfix
	
	=============================================================================
	
