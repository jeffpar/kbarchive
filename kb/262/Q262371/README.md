---
layout: page
title: "Q262371: XADM: 2140 and 1002 w. Err. -1008 Starting Directory Service"
permalink: kb/262/Q262371/
---

## Q262371: XADM: 2140 and 1002 w. Err. -1008 Starting Directory Service

	Article: Q262371
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 13-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Exchange Server directory service, the following error
	message may be displayed:
	
	  Error 2140. Internal Windows NT error.
	
	The following event ID is logged in the Microsoft Windows NT Event Viewer
	application event log:
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Type: Error
	  Category: Internal Processing
	  Description:
	  The Microsoft Exchange Server database, EDB, could not be initialized and
	  returned error -1008. Unrecoverable error. The directory cannot continue.
	
	CAUSE
	=====
	
	This issue can occur because many virus protection programs set files to read
	only to protect the files. The -1008 error corresponds to
	JET_errDatabaseFileReadOnly.
	
	RESOLUTION
	==========
	
	To resolve this issue, if the database is set to read only, remove the Read Only
	attribute from the database and restart the directory service.
	
	You may need to run the eseutil /r /ds command to make the directory consistent.
	
	MORE INFORMATION
	================
	
	Microsoft recommends that file-level virus protection programs exclude the
	Exchange Server database and log files. These files should be scanned by an
	Exchange Server-aware virus protection product.
	
	For additional information about antivirus software and Exchange Server, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q245822 XGEN: Recommendations for Troubleshooting an Exchange Server Computer
	  with Antivirus Installed
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
