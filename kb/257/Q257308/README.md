---
layout: page
title: "Q257308: XCON: Dynamic RAS Doesn't Work w. &quot;-RpcServerUseProtSeqEp...&quot;"
permalink: /kb/257/Q257308/
---

## Q257308: XCON: Dynamic RAS Doesn't Work w. &quot;-RpcServerUseProtSeqEp...&quot;

	Article: Q257308
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 21-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Dynamic Remote Access Service (RAS) dials the receiving server, but the
	connection may be terminated (the other server hangs up) and no mail is
	transferred. When you run the Rpingc32 utility against the Rpings utility, the
	ping does not work and the following error message is displayed:
	
	  -RpcServerUseProtSeqEp returned a status 0xE
	
	CAUSE
	=====
	
	The hexadecimal value 0xE translates to a decimal value of 14. If you type the
	following command at a command prompt
	
	  NET HELPMSG 14
	
	the Microsoft Windows NT error code is translated as "Not enough storage is
	available to complete this operation."
	
	RESOLUTION
	==========
	
	To resolve this issue, increase the amount of random access memory (RAM) on the
	receiving server.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q175496 XCON: Using RPCPing to Troubleshoot MTA Connections
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
