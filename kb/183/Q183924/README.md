---
layout: page
title: "Q183924: XADM: Slow Client Performance While Performing Store Operations"
permalink: kb/183/Q183924/
---

## Q183924: XADM: Slow Client Performance While Performing Store Operations

	Article: Q183924
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to perform client functions related to the information store, such
	as opening a message, sending a message, opening a folder, and so on, you may
	experience long delays. There will be no errors in the application event log,
	and performance monitoring will not reflect any problem with Exchange Server.
	
	CAUSE
	=====
	
	Either the Exchange Server information store is not optimally configured, or the
	Limit memory usage to... option has been selected in the Exchange Optimizer and
	has been set too low.
	
	WORKAROUND
	==========
	
	To work around this problem, run the Exchange Optimizer to optimally configure
	the Exchange Server computer, information store, and directory services.
	
	MORE INFORMATION
	================
	
	The symptoms above are generally related to the number (#) of information store
	buffers being set too low. This condition is corrected either by running the
	Exchange Optimizer or by removing the Limit Memory option in the Exchange
	Optimizer.
	
	The Exchange Optimizer creates a log file (in text format) called Perfopt.log,
	which is found in the <winnt root>\system32 directory.
	
	The Perfopt.log file contains statistics from each optimization and appends to
	itself; therefore the last optimization log will be at the bottom of this file.
	
	The following is an example of a re-optimized information store that corrected
	slow client problems. The Perfopt.log file will include similar information
	regarding the information store buffer change:
	
	  Set # of information store buffers from 463 to 8078
	  Set # of directory buffers from 394 to 6882
	
	Additional query words: hangs hang hourglass performance
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
