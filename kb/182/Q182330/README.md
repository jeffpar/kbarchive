---
layout: page
title: "Q182330: XCON: Perfmon Work Queue and MTA Queues Tab Conflict"
permalink: /kb/182/Q182330/
---

## Q182330: XCON: Perfmon Work Queue and MTA Queues Tab Conflict

{% raw %}

	Article: Q182330
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you view the Performance Monitor Work queue, there may be a certain number
	of items always present. At the same time, the MTA Queues tab in the Exchange
	Server Administrator program may show a conflicting number of items.
	
	CAUSE
	=====
	
	Messages with deferred delivery may appear in the Performance Monitor Work Queue
	and may not be accounted for on the MTA Queues tab. Also there may be a "broken
	pointer" to the Db00002b.dat file. The Performance Monitor Work Queue counter
	points to this file for an accurate reading of the amount of messages to be
	processed. Occasionally, this pointer or the file produces an inaccurate
	reading.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform the following steps:
	
	1. Stop the Message Transfer Agent (MTA) service in the Control Panel Service
	  icon.
	
	2. For Exchange Server versions 4.0 and 5.0, go to the
	  <drive>:\Exchsrvr\MTADATA directory, and rename the Db00002b.dat file.
	
	  For Exchange Server version 5.5, rename the Db000027.dat file.
	
	3. For Exchange Server 4.0, 5.0, and 5.5, run mtacheck /v at least two times.
	  This is the preferred method to recreate the queue within the MTADATA
	  directory.
	
	  For Exchange Server 5.5 Service Pack 1 and later, do not run mtacheck /v if
	  the work queue file has been renamed. Doing so causes an access violation
	  that results in the work queue not being rebuilt. Instead, use Mtacheck.exe
	  version 5.5.1960 from the Exchange Server 5.5 CD, which should rebuild the
	  work queue file.
	
	4. Restart the MTA service. The Performance Monitor should report the correct
	  number of items in the MTA work queue.
	
	MORE INFORMATION
	================
	
	There is no guarantee that the work queue .dat file in Exchange Server 5.5 will
	always be Db000027.dat. In cases where the server was upgraded from an earlier
	version, the work queue can be named Db00002b.dat.
	
	To verify which file is the work queue, run mtacheck /v /f mtacheck.log, and
	locate the work queue designation from the Mtacheck.log file.
	
	
	Additional query words: perfmon length wrong
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
