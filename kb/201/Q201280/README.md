---
layout: page
title: "Q201280: XFOR: EXCALCON May Fail to Connect to the CALCON Server"
permalink: /kb/201/Q201280/
---

## Q201280: XFOR: EXCALCON May Fail to Connect to the CALCON Server

	Article: Q201280
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Lotus Notes users may notice that all the Free/Busy (F/B) queries for Exchange
	Server users are failing. This might indicate that the remote procedural call
	(RPC) communication between the two systems is broken.
	
	CAUSE
	=====
	
	The Exchange Calendar Connector(EXCALCON) task on the Notes server communicates
	by means of RPC to the Calendar Connector (CALCON) on an Exchange Server
	computer. Although the Exchange Calendar Connector task is supposed to be able
	to re-establish RPC connectivity to the Calendar Connector, there is a small
	chance that it will fail during the attempt. This will result in all F/B queries
	from Notes for Exchange Server users to fail.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Ensure that the Calendar Connector is back up and running, and that any
	  network connectivity issues have been resolved.
	
	2. On the Notes server, shut down the Exchange Server Add-on task.
	
	3. Once the task has successfully shut down, restart the Exchange Calendar
	  Connector Add-on task. For instructions on loading and shutting down the
	  Exchange Calendar Connector Add-on task, refer to the documentation in the
	  Exchsrvr\Connect\Calcon\Doc directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
