---
layout: page
title: "Q152941: XCON: MTA Crashes Over Slow or Sporadic Network Connection"
permalink: kb/152/Q152941/
---

## Q152941: XCON: MTA Crashes Over Slow or Sporadic Network Connection

	Article: Q152941
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 29-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server over a network that is either slow or
	bursty, the Microsoft Exchange Message Transfer Agent (MTA) might crash with the
	following error message in the Windows NT Application Event Log.:
	
	  Event ID = 9405:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error:
	  Exception e0020002 occurred at Address 77f3cbcd. [BASE TCP/IP DRVR 10] (16)
	
	  Event ID = 9405:
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error:
	  Exception c0000005 occurred at Address 761f62ab.
	
	CAUSE
	=====
	
	These problems are due to heap corruption when two or more threads in the MTA
	try to access the same data structures without proper synchronization. This
	problem has been particularly noted in networks in which there are a large
	number of associations being opened and closed between MTA's. Frequently, these
	MTA failures are associated with slow and unreliable links. For example, an ICMP
	Ping might return only one out of eight ping attempts.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. A supported fix is now available, but has not been fully
	regression-tested and should be applied only to systems experiencing this
	specific problem. Unless you are severely impacted by this specific problem,
	Microsoft recommends that you wait for the next Service Pack that contains this
	fix. Contact Microsoft Product Support Services for more information.
	
	These issues have been fixed in a post SP2 build of the MTA, 994.2. Customers
	with either 4.0 or SP1 servers will first need to update these to SP2 before
	applying the patch.
	
	
	MORE INFORMATION
	================
	
	Before the crash occurs, you might see the following events in the Windows NT
	Application log:
	
	  A sockets error 10060 on a connect() call was detected. The MTA will attempt
	  to recover the sockets connection. Control block index: 12. [BASE IL TCP/IP
	  DRVR 54 274] (12)
	
	  Event ID 9215A sockets error 10051 on a connect() call was detected. The MTA
	  will attempt to recover the sockets connection. Control block index: 7. [BASE
	  IL TCP/IP DRVR 10 274] (12)
	
	  Event ID 9224
	  A sockets error 10054 on a send() call was detected. The MTA will attempt to
	  recover the sockets connection. Control block index: 8. [BASE IL TCP/IP DRVR
	  54 272] (12)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
