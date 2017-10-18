---
layout: page
title: "Q237307: WINS Lookup May Not Resolve Some Name Queries"
permalink: kb/237/Q237307/
---

## Q237307: WINS Lookup May Not Resolve Some Name Queries

	Article: Q237307
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable WINS Lookup in a DNS zone, some name queries using Windows
	Internet Name Service (WINS) may not be resolved. In addition, the following
	error message may be displayed:
	
	  Name does not exist.
	
	If you attempt to use Nslookup to resolve the name, the following error message
	may be displayed:
	
	  Cannot find queriedname: Non-existent domain.
	
	If you attempt to Ping the name, the following error message may be displayed:
	
	  Bad IP address queriedname.
	
	CAUSE
	=====
	
	This behavior occurs because the DNS server times out prematurely.
	
	WINS Lookup queries may time out up to one second before the configured timeout
	value. For example, if you specify a timeout value of 1 second, the query may
	time out between 0-1 seconds; if you specify a timeout value of 2, the query may
	time out between 1-2 seconds, and so on.
	
	RESOLUTION
	==========
	
	To resolve this problem, increment the WINS Lookup timeout value by 1. For
	example, if the DNS server is configured for a timeout value of 1, increase the
	value to 2.
	
	NOTE: You can change the timeout value on the WINS Lookup tab in zone properties.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Windows NT Server 4.0.
	
	MORE INFORMATION
	================
	
	If you perform a test in Network Monitor, the response "RCODE 3, Name Error" is
	returned in the reply to the originating DNS client from the DNS server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
