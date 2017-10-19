---
layout: page
title: "Q246762: XCON: Error Starting the MTA After Upgrading to Exchange 5.5"
permalink: /kb/246/Q246762/
---

## Q246762: XCON: Error Starting the MTA After Upgrading to Exchange 5.5

	Article: Q246762
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade from Exchange Server 4.0 to Exchange Server 5.5, you may
	receive the following error message:
	
	  The procedure entry point EcFloraToLpstr could not be located in the dynamic
	  link library address.dll
	
	  Could not start the Microsoft Exchange Message Transfer Agent service on
	  \\<servername>
	  Error 2186: The service is not responding to the control function.
	
	This error message may be accompanied by the following errors in the System Event
	Log:
	
	  Event ID: 7000
	  Source: Service Control Manager
	  Type: Error
	  Category: None
	  The Microsoft Exchange Message Transfer Agent service failed to start due to
	  the following error:
	  The service did not respond to the start or control request in a timely
	  fashion.
	
	  Event ID: 7009
	  Source: Service Control Manager
	  Type: Error
	  Category: None
	  Timeout (120000 milliseconds) waiting for service to connect.
	
	CAUSE
	=====
	
	The Address.dll file located in the Exchsrvr\Bin folder was not replaced during
	the upgrade.
	
	RESOLUTION
	==========
	
	To resolve this problem,
	
	1. Rename the Address.dll file and copy the original Address.dll file from the
	  Server\Setup\I386\Bin folder on the Exchange Server 5.5 CD to the
	  Exchsrvr\Bin folder on the server.
	
	2. Start the MTA service.
	
	MORE INFORMATION
	================
	
	You can also find the Address.dll file in the following folders:
	
	  Exchsrvr\Connect\Msexcimc\Bin
	  Exchsrvr\Connect\Msmcon\Bin
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
