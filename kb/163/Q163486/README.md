---
layout: page
title: "Q163486: XCCC: Error Starting Schedule+ Free/Busy Connector"
permalink: /kb/163/Q163486/
---

## Q163486: XCCC: Error Starting Schedule+ Free/Busy Connector

	Article: Q163486
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 09-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attemp to start the Microsoft Schedule+ Free/Busy Connector, you may
	encounter the following error message:
	
	  Could not start the MS Mail Schedule+ Free/Busy Connector service
	  on <server name>.
	  Error 1069: The service did not start due to a logon failure.
	
	where <server name> is the name of your Microsoft Exchange Server. The
	service will not start.
	
	CAUSE
	=====
	
	This can occur if the version of the Extension for Schedule+ Free/Busy Connector
	for <installed platform> is inconsistent with the version of Microsoft
	Exchange Server that you are using. For instance, if you are using Microsoft
	Exchange Server version 4.0 with Service Pack 2, and you reinstall the Microsoft
	Mail Connector from the original Microsoft Exchange Server compact disk, the
	version of the Extension for Schedule+ Free/Busy Connector will be 4.0.837.0.
	
	RESOLUTION
	==========
	
	In order for the Extension for Schedule+ Free/Busy Connector to be correct, you
	will need to reinstall the Microsoft Mail Connector from the Service Pack.
	
	You can check the version for the Extension for Schedule+ Free/Busy Connector in
	the Microsoft Exchange Administrator program by going to the Add-Ins container
	in the Configuration for the Site and checking the properties of the Extension.
	
	The following table shows the version of Microsoft Exchange along with the
	version of the Extension for Schedule+ Free/Busy Connector:
	
	   Exchange Version     Extension Version
	   4.0 (Release)        4.0.837.0
	   4.0 with SP 2        4.0.993.2
	   4.0 with SP 3        4.0.993.2
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
