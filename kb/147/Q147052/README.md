---
layout: page
title: "Q147052: XADM: Setup Displays Remote Server Does Not Respond Error"
permalink: kb/147/Q147052/
---

## Q147052: XADM: Setup Displays Remote Server Does Not Respond Error

	Article: Q147052
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have nearly finished installing Microsoft Exchange Server, you might
	see the following error message:
	
	  While processing file 'server.ins' at or near line 369, the remote server did
	  not respond.
	
	  MSExchange Directory ID no:
	
	  DS_E_COMMUNICATIONS_PROBLEM.
	
	CAUSE
	=====
	
	There might be a latency issue with the Microsoft Exchange Directory service
	when you install Microsoft Exchange Server. After the call to ServerInstall(),
	it attempts to perform a bind immediately. This can produce a communications
	failure.
	
	WORKAROUND
	==========
	
	To work around this problem, slow down the Microsoft Exchange Server Setup
	program by lowering foreground priority and running other CPU or I/O bound
	applications while you are installing the Microsoft Exchange Server.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
