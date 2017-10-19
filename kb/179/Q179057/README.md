---
layout: page
title: "Q179057: XFOR: Exchange-Notes Dirsync Fails with Truncated Person Doc"
permalink: /kb/179/Q179057/
---

## Q179057: XFOR: Exchange-Notes Dirsync Fails with Truncated Person Doc

	Article: Q179057
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Directory synchronization between Microsoft Exchange Server and Lotus Notes, via
	Linkage Message/Directory Exchange, fails to completely propagate the address
	list into the Exchange Directory.
	
	CAUSE
	=====
	
	When the Linkage Directory Exchange Agent encounters a Lotus Notes person
	document that has a missing or blank attribute (that is, fullname, domain), the
	process halts at that point and does not continue to process the remaining
	transactions, even though they are valid.
	
	RESOLUTION
	==========
	
	Apply the fix described below in the STATUS section. The Linkage Directory
	Exchange Agent will now detect and skip over a Lotus Notes person document that
	does not contain the required fields and will continue processing the rest of
	the transactions. The transactions that failed are noted in the Linkage browse
	log.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Linkage Message Exchange version
	3.2.
	
	
	A supported fix is now available, but has not been fully regression-tested and
	should be applied only to systems experiencing this specific problem. Contact
	Microsoft Technical Support for more information.
	
	
	Additional query words: NTS DOMINO
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	
	=============================================================================
	
