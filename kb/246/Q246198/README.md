---
layout: page
title: "Q246198: Proxy Clients Time-Out Using RRAS Demand Dial"
permalink: /kb/246/Q246198/
---

## Q246198: Proxy Clients Time-Out Using RRAS Demand Dial

	Article: Q246198
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0 SP5,4.0 SP6
	Operating System(s): 
	Keyword(s): kbnetwork kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0 SP5, 4.0 SP6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install RRAS and IIS Proxy Server on a Windows NT 4.0 Server, and you
	use RRAS Demand Dial instead of Proxy's Demand Dial. Proxy clients may timeout
	on the *first* attempt to connect to a resource across the demand-dial link if
	the link is not working properly.
	
	If you click Refresh in your browser when the connection is working again, the
	proxy client works correctly.
	
	CAUSE
	=====
	
	The issue occurs because on the first connection attempt an incorrect IP address
	is used as the source address when the Demand Dial connection is not working.
	
	
	Additional query words: down
	
	======================================================================
	Keywords          : kbnetwork kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp6 kbWinNTS400sp5 kbWinNTS400search
	Version           : winnt:4.0 SP5,4.0 SP6
	Issue type        : kbprb
	
	=============================================================================
	
