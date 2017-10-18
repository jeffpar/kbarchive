---
layout: page
title: "Q263567: XCON: MTA Stops Responding and Cannot Be Stopped"
permalink: kb/263/Q263567/
---

## Q263567: XCON: MTA Stops Responding and Cannot Be Stopped

	Article: Q263567
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you connect two Exchange Server computers using a connector such as an X.400
	Connector, and then remove the connector on one of the servers, the message
	transfer agent (MTA) on the other server may stop responding (hang) if it
	attempts to connect to the MTA on the first server. If you attempt to stop the
	MTA on the other server, you are unable to do so.
	
	CAUSE
	=====
	
	This issue occurs when the server on which the connector is removed has more
	than one computer name associated with it. Under these circumstances, a remote
	MTA may not properly increment an array index counter when it attempts to
	connect to the MTA on the server.
	
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
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
