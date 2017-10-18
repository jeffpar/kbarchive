---
layout: page
title: "Q152896: XADM: MTA Startup Slow When Database is Large"
permalink: kb/152/Q152896/
---

## Q152896: XADM: MTA Startup Slow When Database is Large

	Article: Q152896
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
	
	After an abnormal shutdown, the Microsoft Exchange Message Transfer Agent (MTA)
	service may take an extremely long time to start. On large databases, this could
	mean several hours.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange does several file checksums to each individual Db*.dat file
	located in the \Exchsrvr\mtadata directory each time the MTA starts after an
	abnormal shutdown has occurred. This is done to maintain file integrity to
	prevent further MTA failures. Microsoft Exchange may scan each file several
	times and, in some cases, this can be thousands of files with gigabytes of
	information.
	
	Microsoft has determined that some of the file integrity checks performed by the
	MTA are too CPU intensive and redundant and offer no cost effective gain to
	maintaining database integrity over other, faster, methods.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: shutdown startup msexchangemta slow hang crash
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
