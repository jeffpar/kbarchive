---
layout: page
title: "Q152894: XADM: Store Crashes When Passing 32K of Data to Event Log"
permalink: kb/152/Q152894/
---

## Q152894: XADM: Store Crashes When Passing 32K of Data to Event Log

	Article: Q152894
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Information Store (IS) crashes when it tries to write
	close to 32K bytes of data to a single Windows NT Event Log entry. This will
	happen if the diagnostic logging on the IS is set to Maximum.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: STORE
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
