---
layout: page
title: "Q260230: XADM: Error 4294966090 When Starting Information Store"
permalink: kb/260/Q260230/
---

## Q260230: XADM: Error 4294966090 When Starting Information Store

	Article: Q260230
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	You may receive the following error messages when you start the Exchange Server
	information store:
	
	  The Microsoft Exchange Information Store service returned service specific
	  error 4294966090.
	
	The following events may be logged in the application event log and system event
	log:
	
	  Event Type: Error
	  Event Source: ESE97
	  Event ID: 145
	  Description:
	  MSExchangeIS (386) The database engine could not access the file called
	  e:\exchsrvr\mdbdata.
	
	  Event Type: Error
	  Event Source: MSExchangeIS
	  Event ID: 1120
	  Description:
	  Error Non-database file or corrupted database initializing the Microsoft
	  Exchange Server Information Store database.
	
	  Event Type: Error
	  Event Source: MSExchangeIS
	  Event ID: 5000
	  Description:
	  Unable to initialize the Microsoft Exchange Information Store service. Error
	  Non-database file or corrupted database.
	
	  Event Type: Error
	  Event Source: Service Control Manager
	  Event ID: 7024
	  Description:
	  The Microsoft Exchange Information Store service terminated with
	  service-specific error 4294966090.
	
	CAUSE
	=====
	
	This issue can occur if the DB Path value in the registry is incorrect for the
	private or public information store.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the DB Path value contains the full path
	to the correct database in both of the following locations in the registry:
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPrivate
	
	- DB Path: REG_SZ:e:\exchsrvr\mdbdata\priv.edb
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeIS\ParametersPublic
	
	- DB Path: REG_SZ:e:\exchsrvr\mdbdata\pub.edb
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
