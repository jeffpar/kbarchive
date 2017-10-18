---
layout: page
title: "Q185025: XFOR: Dr. Watson on Startup Due to Excess DNS Search Entries"
permalink: kb/185/Q185025/
---

## Q185025: XFOR: Dr. Watson on Startup Due to Excess DNS Search Entries

	Article: Q185025
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Upon startup of Exchange, the Internet Mail Service crashes with a Dr. Watson
	log error message:
	
	  Application exception occurred:
	          App: MSEXCIMC.dbg (pid=167)
	          When: 4/24/1998 @ 13:28:38.298
	          Exception number: c0000005 (access violation)
	
	CAUSE
	=====
	
	This is caused by the introduction through RegEdit, or other third-party
	utility, of additional Domain Name Service (DNS) entries into the TCP/IP
	configuration under DNS Suffix Search Order. There is a limit of six (6) entries
	supported under Windows NT 4.0.
	
	The Internet Mail Service attempts to parse these entries, and when attempting to
	store the length of the seventh entry, triggers an access violation.
	
	WORKAROUND
	==========
	
	To work around this problem, do not exceed the supported number of entries.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 5.0 and 5.5.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : 5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
