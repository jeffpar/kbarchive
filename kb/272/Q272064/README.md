---
layout: page
title: "Q272064: XCON: Dynamic RAS Connection Hangs Up Before Transferring Mail"
permalink: kb/272/Q272064/
---

## Q272064: XCON: Dynamic RAS Connection Hangs Up Before Transferring Mail

	Article: Q272064
	Product(s): Microsoft Exchange
	Version(s): 5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 02-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a dynamic Remote Access Service (RAS) connection to dial another
	server, the service hangs up before transferring mail. When you troubleshoot
	using the RPC Ping command, you receive the following error message:
	
	  -RpcServerUseProtSeqEp returned a status 0xE
	
	CAUSE
	=====
	
	This issue can occur if the server does not have enough random access memory
	(RAM) available to accept the connection.
	
	RESOLUTION
	==========
	
	To resolve this issue, add more RAM to your server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : :5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
