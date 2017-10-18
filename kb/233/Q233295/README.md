---
layout: page
title: "Q233295: XADM: Error -1206 Starting Database"
permalink: kb/233/Q233295/
---

## Q233295: XADM: Error -1206 Starting Database

	Article: Q233295
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the information store or directory, you may receive any of the
	following error messages:
	
	  -1206
	  0xfffffb4a
	  fffffb4a
	  4294966090
	
	All of the above are the same error, JET_errDatabaseCorrupted.
	
	CAUSE
	=====
	
	This is a relatively generic error that occurs when the database engine is
	unable to access critical information in the database file during database
	startup. The database may not actually be damaged, but may be the wrong version
	(for example, an Exchange Server 5.0 database runs against an Exchange Server
	5.5 computer), or may be inaccessible because it is held open by another
	process.
	
	WORKAROUND
	==========
	
	Before concluding that the database is actually damaged, a full backup is always
	recommended and further troubleshooting should be done to determine the cause of
	the error.
	
	Check for corresponding events in the application event log leading up to or
	during the stop of the service. Such events may indicate a more precise cause of
	the stop.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
