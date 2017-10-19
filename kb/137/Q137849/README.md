---
layout: page
title: "Q137849: Event 4102 Error with WINS Server"
permalink: /kb/137/Q137849/
---

## Q137849: Event 4102 Error with WINS Server

	Article: Q137849
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following event appears in the Windows NT system log:
	
	  Event ID: 4102
	  Source: WINS
	  Description: The connection was aborted by the remote client.
	
	CAUSE
	=====
	
	WINS replication is not configured properly.
	
	Most likely your WINS server is set to Push and/or Pull to another WINS server
	that is not configured to Push/Pull back.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Stop replication on both WINS servers.
	
	  -or-
	
	- Properly configure Push/Pull replication on both WINS servers.
	
	For additional information about configuring WINS replication see Chapter 5 of
	the Windows NT Server TCP/IP manual.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
