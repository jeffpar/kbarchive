---
layout: page
title: "Q199705: XFOR: How to Enable Detailed Logging for the Notes Excalcon Task"
permalink: /kb/199/Q199705/
---

## Q199705: XFOR: How to Enable Detailed Logging for the Notes Excalcon Task

	Article: Q199705
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you are troubleshooting the Calendar Connector for Lotus Notes, it is very
	difficult to find problems encountered when Notes users are trying to find
	Free/Busy information for Exchange Server recipients. Most of the processes in
	Notes are handled by server tasks. This article will describe a procedure to
	enable detailed logging on the Notes server console to assist with
	troubleshooting Notes to Exchange Server Free/Busy transactions.
	
	MORE INFORMATION
	================
	
	1. Stop the Notes server.
	
	2. Find and modify the Notes.ini file for the Notes server. By default, it will
	  be the Winnt directory.
	
	3. Add the following line to the very end of the Notes.ini file:
	
	  debug_sched_all=1
	
	4. Save the Notes.ini file.
	
	5. Restart the Notes server.
	
	After restarting the Notes server, all activity by the Calendar Connector (a
	Lotus Notes Server task) and, subsequently, the Exchange Calendar Connector (an
	Exchange Server task) will be sent to the Notes server console. Note that the
	logging activity will reduce the overall performance of the Notes server. The
	debug_sched_all parameter should not be set to 1 unless you need to troubleshoot
	the Exchange Calendar Connector.
	
	Additional query words: C&M Web Drop 3, excalcon, notes logging, calcon
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
