---
layout: page
title: "Q128353: Memory Leak on Clients with Remote Procedure Calls"
permalink: /kb/128/Q128353/
---

## Q128353: Memory Leak on Clients with Remote Procedure Calls

	Article: Q128353
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After the client side of Remote Procedure Call (RPC) creates large number of
	threads, makes an RPC, and exits, a memory leak occurs. The server side of the
	RPC is not affected.
	
	
	CAUSE
	=====
	
	When the client side of RPC thread disappears, the thread pointer in the TLS
	storage is not released.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
