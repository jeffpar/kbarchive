---
layout: page
title: "Q263916: XFOR: MS Mail Connector Stops Unexpectedly While Viewing Queue"
permalink: kb/263/Q263916/
---

## Q263916: XFOR: MS Mail Connector Stops Unexpectedly While Viewing Queue

	Article: Q263916
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you view the message queue for a connection to a particular postoffice in
	the properties for the Microsoft Mail Connector and then press the ALT key, the
	Microsoft Mail Connector may stop unexpectedly with a call stack that indicates
	that the issue occurred in the Conadmin.dll file.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	To view the message queue for a connection to a particular Microsoft Mail
	postoffice in the Exchange Server Administrator program:
	
	1. Start the Administrator program. Click Start, point to Programs, point to
	  Microsoft Exchange, and then click Microsoft Exchange Administrator.
	
	2. In the left pane, click the Connections object under the appropriate site. In
	  the right pane, click the Microsoft Mail Connector, and then on the File
	  menu, click Properties. Note that the Connections object appears under the
	  Configuration object.
	
	3. Click the Connections tab, click the connection that you want to view, and
	  then click Queue.
	
	Additional query words: crash hang
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
