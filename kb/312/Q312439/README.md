---
layout: page
title: "Q312439: Err Msg: Internet Mail Server Requires DNS to Be Configured"
permalink: kb/312/Q312439/
---

## Q312439: Err Msg: Internet Mail Server Requires DNS to Be Configured

	Article: Q312439
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbExchange550
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Exchange 5.5 Service Pack 3 on a Microsoft Windows 2000 member
	server and the Internet Mail Service (IMS) is not installed correctly, you may
	receive the following error message:
	
	  The Internet Mail Server requires DNS to be configured on
	  <computername>.
	
	The following information may be recorded in the Application log:
	
	  Event ID: 4067
	  Source: MSExchangeIMC
	  Description: The Microsoft Exchange Internet Mail Service cannot start because
	  the TCP/IP domain name was not found during initialization.
	
	  Event ID: 4058
	  Source: MSExchangeIMC
	  Description: The Microsoft Exchange Internet Mail Service cannot start because
	  the name resolver cannot be initialized.
	
	CAUSE
	=====
	
	This behavior can occur if the primary DNS suffix has not been set on the server
	that is running Exchange Server 5.5.
	
	RESOLUTION
	==========
	
	To resolve this behavior, add the primary DNS suffix on the server that is
	running Exchange Server 5.5:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  System.
	
	2. Click the "Network identification" tab, click Properties, and then click
	  More.
	
	3. Type the primary DNS suffix in the "Primary DNS suffix for this computer"
	  box, click OK, click OK again, and then click OK once more.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbExchange550 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
