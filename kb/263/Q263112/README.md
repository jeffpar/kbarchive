---
layout: page
title: "Q263112: XCON: Message Transfer Agent Generates Event 1016 When Logging P"
permalink: /kb/263/Q263112/
---

## Q263112: XCON: Message Transfer Agent Generates Event 1016 When Logging P

	Article: Q263112
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the Exchange Server 5.5 Service Pack 3 message transfer agent (MTA) is
	installed on a computer that is running Microsoft Windows 2000 Server, the MTA
	may log an event 1016 when it is writing an extensible counter to the Windows
	2000 Server Performance Monitor log.
	
	CAUSE
	=====
	
	This issue can occur because Performance Monitor in Windows 2000 Server requires
	that performance data be entered in 8-byte lengths. The MTA does not always use
	8-byte lengths.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3. This problem was first corrected in Exchange Server
	5.5 Service Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
