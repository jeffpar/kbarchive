---
layout: page
title: "Q168892: XCON: MTA Reports Failure on Ecbios.dll During Startup"
permalink: kb/168/Q168892/
---

## Q168892: XCON: MTA Reports Failure on Ecbios.dll During Startup

	Article: Q168892
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start the Microsoft Exchange Server message transfer agent (MTA), the
	following error message may appear:
	
	  The dynamic link library Ecbios.dll could not be found in the specified
	  path.
	
	The Windows NT Application log shows the following error:
	
	  Event ID: 9106
	  Source:MSExchangeMTA
	  Category: Field Engineering
	  An internal MTA error occurred. The X.25 interface failed to initialize.
	  Check to make sure the X.25 card is started. (14)
	
	The MTA starts after the error and appears functional.
	
	CAUSE
	=====
	
	The above error means that during the MTA initialization it could not initialize
	the Eicon X.25 card.
	
	This means that either the Eicon X.25 driver is not properly installed or there
	is a problem with the installed driver.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	- Reinstall the Eicon driver and the WAN Services for Windows NT software.
	
	This problem most often occurs after you perform an Exchange Server Disaster
	Recovery on a computer without first installing the Eicon software if the X.25
	card was being used on an X.400 connector.
	
	Additional query words: x25 restore recovery 2140 x400
	
	======================================================================
	Keywords          : kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
