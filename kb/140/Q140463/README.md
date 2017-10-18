---
layout: page
title: "Q140463: SNMP Agent Hangs on Very Long Queries"
permalink: kb/140/Q140463/
---

## Q140463: SNMP Agent Hangs on Very Long Queries

	Article: Q140463
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When an SNMP GET or WALK request with more than 32 elements is received by the
	SNMP Service on a Windows NT machine, the service will hang. Using Performance
	Monitor to examine threads for "snmp", it will be observed that thread 2 is
	sitting at 90% - 100% of user time.
	
	The machine will continue to operate as a server, but no further SNMP requests
	will be processed.
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
