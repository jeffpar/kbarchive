---
layout: page
title: "Q242232: XFOR: Exchange Connector for Novell GroupWise Event 6067"
permalink: /kb/242/Q242232/
---

## Q242232: XFOR: Exchange Connector for Novell GroupWise Event 6067

	Article: Q242232
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 18-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Microsoft Exchange Connector for Novell GroupWise (Exchange Server
	version 5.5 Service Pack 3 or Web 4 version) attempts to access a file that is
	locked, the Exchange Connector for Novell GroupWise logs an event 6067 error in
	the application event log.
	
	CAUSE
	=====
	
	The Exchange Server computer attempts to open the file every 200 milliseconds,
	but the file is locked by the NetWare server, which returns a File Lock Fail
	packet to the Exchange Server computer. The NetWare server locks the file
	because it is still writing to the file. During this time, the Exchange Server
	computer logs the error in the Microsoft Windows NT Event Viewer. Eventually,
	the Exchange Server computer is able to open the file and does a burst read of
	it.
	
	RESOLUTION
	==========
	
	Even though this error is logged, the Exchange Connector for Novell GroupWise
	still works. Ignore the error unless another process (for example, a virus scan,
	backup agent, or another connector) may be holding the file. This problem is
	common during the transfer of directory synchronization files, but may also
	occur with calendar information, as well as with large attachments.
	
	Additional query words: 6066 6062
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
