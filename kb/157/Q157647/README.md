---
layout: page
title: "Q157647: XADM: Can't Change Location of IS Log Files if IS Not Running"
permalink: /kb/157/Q157647/
---

## Q157647: XADM: Can't Change Location of IS Log Files if IS Not Running

	Article: Q157647
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you try to change the location of Information Store (IS) log files through
	the Microsoft Exchange Server Administrator program, the Administrator program
	shuts down the Information Store service before changing the path. If the
	Information Store service is not running, the Microsoft Exchange Server
	Administrator program tries to start the service before shutting it down. This
	is done to help ensure that the shutdown of the database is clean; this is a
	prerequisite to moving the database.
	
	If the service has stopped due to lack of disk space and you attempt to change
	the location of IS log files through the Administrator program, the
	Administrator program will return an error message stating that the service
	could not be stopped. It is actually trying to start and then stop the service.
	Use Performance Optimizer to move the IS log files. Microsoft has confirmed this
	to be a problem in Microsoft Exchange Server, version 4.0. We are researching
	this problem and will post new information here in the Microsoft Knowledge Base
	as it becomes available.
	
	Additional query words: PerfOpt logs
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	
