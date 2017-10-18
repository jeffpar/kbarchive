---
layout: page
title: "Q163074: XADM: Use Message Tracking Logs to Identify Oversize Msgs"
permalink: kb/163/Q163074/
---

## Q163074: XADM: Use Message Tracking Logs to Identify Oversize Msgs

	Article: Q163074
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server message tracking logs can be used in a variety of
	ways to help determine the health of the Exchange Server messaging system. In
	deciding upon message size limitations for individual mailboxes, message
	transfer agents (MTAs), and gateways, it may be helpful to look at the size of
	messages sent for a 24-hour period. This method can also be used to help
	understand the load that a particular component was under during a time of heavy
	system use.
	
	This article assumes that message tracking has been enabled and the Exchange
	Server services restarted so that the message tracking logs are populated.
	
	MORE INFORMATION
	================
	
	To use message tracking to identify oversize messages:
	
	1. Use Microsoft Excel to open the tracking log file that is located in the
	  Exchsrvr folder (Exchsrvr\Tracking.log). You are prompted to choose the type
	  of file that best describes the data. Click Delimited, and then click Finish.
	
	2. Click the upper left corner of the table to select all.
	
	3. On the Data menu, click Sort. Under Sort By, click Column I, and then click
	  Descending. Click OK.
	
	The first row of the table now contains the details of the largest message that
	was sent during the 24-hour period that the log recorded.
	
	Column A contains the message ID or MTS ID of the message.
	
	Column G contains the distinguished name (DN) of the originating mailbox; the DN
	is used to identify the mailbox. Make sure that mailboxes that send or receive
	large messages that affect server performance negatively have limits placed on
	them.
	
	Column I contains the size of the message in bytes.
	
	More detailed information on the format of the message tracking logs can be found
	in the Books Online, in the Microsoft Exchange Server Administrator's Guide,
	Chapter 17, page 64.
	
	Crystal Reports, in the BackOffice Resource Kit, can generate better reports by
	using information from the Exchange Server Tracking Logs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
