---
layout: page
title: "Q244586: XADM: Mailbox Manager Logging Levels in Exchange Server"
permalink: /kb/244/Q244586/
---

## Q244586: XADM: Mailbox Manager Logging Levels in Exchange Server

	Article: Q244586
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use the Exchange Server Mailbox Manager add-in utility included in
	Exchange Server version 5.5 Service Pack 3, you can configure up to five logging
	levels. Each level is unique and gives you different information.
	
	This article describes the different logging levels and the uses for each level.
	
	MORE INFORMATION
	================
	
	The logging level, which is set on the Advanced tab, determines what information
	is captured by the trace log files and the application event log. The logging
	level has no effect on the information in the administrator's report.
	
	+-----------------------------------------------------------------------------------------------------------------------------+
	| Logging Level | Event Log                                 | Trace Log                                                       | 
	+-----------------------------------------------------------------------------------------------------------------------------+
	| 1             | Critical Errors                           | None                                                            | 
	+-----------------------------------------------------------------------------------------------------------------------------+
	| 2             | Start, Stop, Critical Errors, and Summary | None                                                            | 
	+-----------------------------------------------------------------------------------------------------------------------------+
	| 3             | Start, Stop, Critical Errors, and Summary | Mailbox level statistics                                        | 
	+-----------------------------------------------------------------------------------------------------------------------------+
	| 4             | Start, Stop, Critical Errors, and Summary | Mailbox and folder level statistics                             | 
	+-----------------------------------------------------------------------------------------------------------------------------+
	| 5             | Start, Stop, Critical Errors, and Summary | Mailbox and folder level statistics with full trace information | 
	+-----------------------------------------------------------------------------------------------------------------------------+
	
	The summary message that is sent to the application event log is in the same
	format as the message that is sent to the administrator. Mailbox and folder
	level statistics, as well as full trace information, are captured in the trace
	log.
	
	Entries in the Application Event Log
	------------------------------------
	
	If you set the logging level to 2 or higher, a summary message is logged in the
	application event log that is similar to the following:
	
	  Event ID: 728
	  Source: MSExchangeMCA
	  Type: Information
	  Category: None
	  Description:
	  The Microsoft Exchange Server Mailbox Manager has completed processing
	  mailboxes
	  Started at: Start-Time
	  Stopped at: : End-Time
	  Mailboxes processed: Processed-Mailbox-Total
	  Messages moved: Moved-Messages-Total
	  Size of moved messages: Moved-Messages-Size-Total
	  Deleted messages: Deleted-Messages-Total
	  Size of deleted messages: Deleted-Messages-Size-Total
	
	If the run is unsuccessful, the following message is logged:
	
	  Event ID: 721
	  Source: MSExchangeMCA
	  Type: Error
	  Category: None
	  Description:
	  Microsoft Exchange Server Mailbox Manager was interrupted before processing
	  was complete - error no = c00002d1. The Microsoft Exchange Server Mailbox
	  Manager has completed processing mailboxes
	  Started at: Start-Time
	  Stopped at: End-Time
	  Mailboxes processed: Processed-Mailbox-Total
	  Messages moved: Moved-Messages-Total
	  Size of moved messages: Moved-Messages-Size-Total
	  Deleted messages: Deleted-Messages-Total
	  Size of deleted messages: Deleted-Messages-Size-Total
	
	Trace Log
	---------
	
	The trace log captures information such as: the object that was affected by the
	Mailbox Manager utility, the number of messages that were deleted, the type of
	event that took place, and the time of a given deletion. Trace log titles are in
	a MCAyyyymmdd.log format, where yyyy is the year, mm the month, and dd the day.
	They can be found in the same folder that the Mailbox Manager utility is
	installed in (the C:\Mbxman folder by default). Trace logs are in CSV format and
	can be opened in any spreadsheet application, for example, Microsoft Excel.
	Trace log files can be very large; delete unwanted log files periodically to
	recover disk space.
	
	NOTE: If you set the logging level to either 3, 4, or 5, the location where the
	MCAyyyymmdd.log files are written may fill up and cause the Exchange Server
	services to stop. For additional information, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q163913 XADM: IS or DS Stops Due to Lack of Drive Space for Log Files
	
	  Q170809 XADM: Exchange Services Stop Due to Low Disk Space
	
	For more information regarding the Exchange Server Mailbox Manager utility,
	download the support files on the FTP site from the same Sp3_55ss.exe file that
	the utility is installed from. For additional information about installing the
	Exchange Server Mailbox Manager utility, click the article number below to view
	the article in the Microsoft Knowledge Base:
	
	  Q242365 XADM: How to Install Exchange Server Mailbox Manager for Service Pack
	  3 from the FTP Site
	
	After you extract the support files, see the User Guide in the
	Support\<language>\Server\Support\Mbmngr\Setup\<platform> folder
	(for example, Support\Eng\Server\Support\Mbmngr\Setup\I386\Mbmanug.htm).
	
	Additional query words: mbclean space crash shut down MCA
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
