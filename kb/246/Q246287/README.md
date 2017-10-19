---
layout: page
title: "Q246287: XADM: Write a Batch File to Shut Down Exchange Server Quickly"
permalink: /kb/246/Q246287/
---

## Q246287: XADM: Write a Batch File to Shut Down Exchange Server Quickly

	Article: Q246287
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create a batch file to shut down Microsoft Exchange
	Server 5.0 or 5.5 more quickly.
	
	MORE INFORMATION
	================
	
	Quitting Exchange Server services takes a relatively long time when you quit
	them as part of the server shutdown process. In some cases, it can take more
	than 10 minutes. Because the system attendant acts as a 'central nervous system'
	for Exchange Server, with other components dependent on it, quitting the system
	attendant before you shut down the server speeds up the process.
	
	1. Create a batch file that has the following lines:
	
	  net stop MSExchangeSA /yes
	
	  net stop MSExchangeSA /yes
	
	  NOTE: Include the duplicate lines to ensure that all dependent services and
	  the system attendant shut down.
	
	2. Run the batch file before you shut down the server.
	
	3. Shut down the server.
	
	Additional query words: batch System Attendant
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	
	=============================================================================
	
