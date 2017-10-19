---
layout: page
title: "Q226137: XADM: Push Notifications Generated &amp; Skipped/Second in PerfMon"
permalink: /kb/226/Q226137/
---

## Q226137: XADM: Push Notifications Generated &amp; Skipped/Second in PerfMon

	Article: Q226137
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the two Performance Monitor counters for MSExchangeIS:
	Push Notifications Generated/sec and Push Notifications Skipped/sec.
	
	MORE INFORMATION
	================
	
	The Push Notifications Generated/sec counter is the number of Push Notifications
	generated every second by the Exchange Server information store to send to
	clients so they will update themselves with the latest messages sent to them.
	
	The Push Notifications Skipped/sec counter is the number of notifications that
	are skipped (not sent to the client). The reason these notifications are not
	sent to the client is because the Exchange Server information store queues push
	notifications for a short period of time, and it sees that several notifications
	are queued to go to the same client. So, instead of flooding the client with
	multiple notifications, the information store skips all but one of the
	notifications, and sends the single notification to the client.
	
	These two counters should never be equal, but the Push Notifications Skipped/sec
	can be a high percentage of the Push Notifications Generated/sec on a healthy
	Exchange Server.
	
	Additional query words: perfmon mail message
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
