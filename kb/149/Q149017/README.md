---
layout: page
title: "Q149017: XCON: MTACheck Event IDs and Command Line Syntax"
permalink: /kb/149/Q149017/
---

## Q149017: XCON: MTACheck Event IDs and Command Line Syntax

{% raw %}

	Article: Q149017
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbnetwork kbusage exc4 exc5 exc55
	Last Modified: 28-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Message Transfer Agent (MTA) has a built-in startup recovery method
	(MTACheck). This method is automatically invoked if the MSExchangeMTA does not
	stop cleanly.
	
	This check scans and makes repairs to the MTA database files (DB*.DAT files in
	the MTADATA subdirectory).
	
	MORE INFORMATION
	================
	
	MTACheck generates the following events:
	
	  MSExchangeMTA / Field Engineering #2119 - MTACheck start
	
	  MSExchangeMTA / Field Engineering #2206 - Once for each internal MTA queue
	  checked. The MTA queues are:
	
	  XAPIWRKQ
	  OOFINFOQ
	  REFDATQ
	  MTAWORKQ
	
	  MSExchangeMTA / Field Engineering #2119 - MTACheck completed
	
	The MTACheck saves the process results in the MTACHECK.LOG file located in the
	<Exchange Server>\MTADATA\MTACHEK.OUT directory. It may take a few minutes
	to a few hours to run the MTACheck, depending on the number of files in the
	MTADATA directory.
	
	You can run the MTACheck manually. To run MTACheck manually, type the following
	at the command prompt:
	
	  mtacheck /v /f <Log file name>.LOG
	
	NOTE: You cannot run MTACheck remotely.
	
	
	Additional query words: faq
	
	======================================================================
	Keywords          : kbnetwork kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
