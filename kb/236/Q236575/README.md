---
layout: page
title: "Q236575: XADM: Intersite Directory Replication Stops Functioning"
permalink: kb/236/Q236575/
---

## Q236575: XADM: Intersite Directory Replication Stops Functioning

	Article: Q236575
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbFEA exc55 EXC55SP3Fea kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 24-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An Exchange Server directory replication bridgehead server may:
	
	- Stop processing the Inbox in the information store, which can potentially
	  result in a backlog of messages in the Directory service's Inbox.
	
	- Stop responding to partner bridgehead servers' requests for replica updates.
	
	Additionally, the following event may appear in the application event log.
	
	NOTE: Before 1171 events can be logged, the Directory service Internal Processing
	logging level must be set to Minimum.
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Description: Exception e0010002 has occurred with parameters 9 and 9 (internal
	  ID 3050444). Contact Microsoft Technical Support for assistance.
	
	Later, perhaps numerous times over several hours, the following event messages
	may be logged in the application event log:
	
	  Event ID: 1105
	  Description: The internal directory replication agent (DRA) Dispatcher thread
	  did not execute. If this message is logged more than 5 times, restart the
	  directory.
	
	  Event ID: 1106
	  Description: The directory replication agent (DRA) has been trying to connect
	  to the mail service for more than 10 minutes. Make sure the mail service is
	  running.
	
	CAUSE
	=====
	
	This issue can occur for several reasons. Most importantly, the 1105 and 1106
	errors are an indication that the directory service has not logged on to the
	mailbox in the information store for a period of time. The 1105 and 1106 events
	may be logged simply because the Information Store service is not running.
	
	The key indicators for the issue that is documented in this article are the 1171
	event specifics.
	
	The Directory service performs similarly to most other MAPI clients when the
	Directory service processes the Inbox and submits replication messages to target
	other replication bridgehead servers. The MAPI portion of the Directory service
	initializes approximately five minutes after Directory service initialization
	(assuming that the Information Store service and Message Transfer Agent (MTA)
	service start after the Directory service).
	
	Typically, this 1171 event message is logged 20 to 60 minutes before the 1105 and
	1106 event messages are logged. This particular error message is more likely to
	occur on multi-processor computers.
	
	
	RESOLUTION
	==========
	
	Microsoft has modified the default behavior of the directory service to prevent
	the preceding symptoms from occurring. This feature is available in the latest
	service pack for Exchange Server version 5.5. For additional information, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To temporarily work around this issue, restart the Directory service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	5.5.This feature was first included in Exchange Server 5.5 Service Pack 4.
	
	Additional query words: DS
	
	======================================================================
	Keywords          : kbFEA exc55 EXC55SP3Fea kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
