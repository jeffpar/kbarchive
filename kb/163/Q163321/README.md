---
layout: page
title: "Q163321: XCON: Interoperability Logs (AP0.LOG)"
permalink: kb/163/Q163321/
---

## Q163321: XCON: Interoperability Logs (AP0.LOG)

	Article: Q163321
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Interoperability text logs consist of the binary content of X.400 protocol
	messages passed between Microsoft Exchange Message Transfer Agents (MTAs) on
	different Microsoft Exchange Servers and between MTAs and client applications.
	They are used to log messages sent over internal interfaces (XAPI, ACSI, TSI,
	and NSI).
	
	MORE INFORMATION
	================
	
	Increasing Diagnostic Logging levels to Medium or higher for both the
	Interoperability and Interface categories will generate AP*.LOG files in the
	exchsrvr\MTADATA directory. The current log is always named AP0.LOG. Prior logs
	are named AP#.LOG with the # increasing with the age of the log. When a log
	reaches 5 megabytes in size it is renamed and a new log is begun.
	
	NOTE: There is no difference between Medium and Maximum for the Interoperability
	category. However, in addition to its influence on Interoperability logs, the
	diagnostics logging level of the Interface category determines which Interface
	events are written to event logs.
	
	Interoperability logs can be instrumental in tracking down configuration problems
	on MTAs. However, they are valuable only to those familiar with ASCII
	translations of X.400 protocol. These logs can grow quite large very quickly and
	cause performance on the Server to suffer.
	
	Additional query words: whitepaper logging section
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
