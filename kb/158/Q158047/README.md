---
layout: page
title: "Q158047: XFOR: Microsoft Mail Connector Error: Service Specific Error 3"
permalink: /kb/158/Q158047/
---

## Q158047: XFOR: Microsoft Mail Connector Error: Service Specific Error 3

	Article: Q158047
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start an MS Mail Connector service that is configured for an
	asynchronous connection to an MS Mail postoffice, the following error message
	may appear:
	
	  The <Service name> service returned service specific error 3.
	
	CAUSE
	=====
	
	This error is caused by a conflict with the communication port. This error may
	occur if an internal modem is installed and there is another device connected to
	the external connector of the same communication port or another application is
	configured to use the same communication port.
	
	RESOLUTION
	==========
	
	Ensure there is no other device connected and no other applications accessing
	the same communication port as the MS Mail Connector.
	
	MORE INFORMATION
	================
	
	The following processes/devices may produce this error:
	
	- Remote Access Service configured to use the same comm port.
	
	- Windows NT Multitasking Message transfer Agent (MTA) configured for
	  asynchronous.
	
	- Uninterrupted Power Supply using a communication port.
	
	Additional query words: async
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
